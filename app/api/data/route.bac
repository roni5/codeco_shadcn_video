
import  NewsletterSubscriber from ../Entities/NewsletterSubscriber.json
import  Contact from ../Entities/Contact.json
// Filterable fields: type, amount, category, description, date, payment_method
async function fetchTransactionEntities() {
  const response = await fetch(`/api/data/Entities/NewsletterSubscriber`, {
    headers: {
      api_key: '4b9f72248f654abc89ed0ebbfa01a74d', // or use await User.me() to get the API key
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  console.log(data)
}

// JavaScript Example: Updating an Entity
// Filterable fields: type, amount, category, description, date, payment_method
async function updateTransactionEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/69232f9c9e4e92499c9d2e9a/entities/Transaction/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '4b9f72248f654abc89ed0ebbfa01a74d', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
   