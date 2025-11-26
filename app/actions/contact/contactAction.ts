'use server';

import { Pool } from 'pg';

// ==========================
// Types
// ==========================
export type ContactForm = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
};

export type ContactFormState = {
  form: ContactForm;
  status: 'default' | 'success' | 'error' | 'field-errors';
  errors?: Record<string, string> | string;
};

// ==========================
// Defaults
// ==========================
const emptyForm: ContactForm = {
  name: '',
  email: '',
  message: '',
  phone: '',
  subject: '',
};

// ==========================
// PG pool (singleton)
// ==========================
declare global {
  // eslint-disable-next-line no-var
  var __pgPool__: Pool | undefined;
}
function getPool(): Pool {
  if (!global.__pgPool__) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error('Missing env DATABASE_URL');
    global.__pgPool__ = new Pool({ connectionString: url, max: 5 });
  }
  return global.__pgPool__;
}

// ==========================
// Table/column config + preflight
// ==========================
// Set via env if you ever change names:
//   CONTACTS_TABLE=public.contact
//   CONTACTS_NAME_COLUMN=name
const CONTACTS_TABLE = process.env.CONTACTS_TABLE ?? 'public.contact';
const NAME_COLUMN = process.env.CONTACTS_NAME_COLUMN ?? 'name';

let tableChecked = false;
async function ensureContactsTable(pool: Pool): Promise<void> {
  if (tableChecked) return;
  const res = await pool.query('select to_regclass($1) as oid', [CONTACTS_TABLE]);
  if (!res.rows?.[0]?.oid) {
    throw new Error(`Contacts table not found: ${CONTACTS_TABLE}. Set CONTACTS_TABLE env.`);
  }
  tableChecked = true;
}

// ==========================
// Helpers
// ==========================
function toForm(fd: FormData): ContactForm {
  return {
    name: ((fd.get('name') as string) ?? '').trim(),
    email: ((fd.get('email') as string) ?? '').trim(),
    message: ((fd.get('message') as string) ?? '').trim(),
    phone: ((fd.get('phone') as string) ?? '').trim(),
    subject: ((fd.get('subject') as string) ?? '').trim(),
  };
}

function validate(form: ContactForm): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!form.name) errors.name = 'Name is required.';
  if (!form.email) errors.email = 'Email is required.';
  if (!form.message) errors.message = 'Message is required.';
  return errors;
}

// ==========================
// Server action (single export)
// ==========================
export async function createContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const form = toForm(formData);
  const fieldErrors = validate(form);
  if (Object.keys(fieldErrors).length > 0) {
    return { form, status: 'field-errors', errors: fieldErrors };
  }

  try {
    const pool = getPool();
    await ensureContactsTable(pool);

    // Insert into your exact table/columns
    const sql = `
      INSERT INTO ${CONTACTS_TABLE} (${NAME_COLUMN}, email, message, phone, subject)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await pool.query(sql, [
      form.name,
      form.email,
      form.message,
      form.phone || null,
      form.subject || null,
    ]);

    return { form: emptyForm, status: 'success' };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Failed to save contact';
    return { form, status: 'error', errors: msg };
  }
}
