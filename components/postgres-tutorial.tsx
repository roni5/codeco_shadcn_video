// Define the functional component with a return type of JSX.Element
export default function PostgresTutorial(): JSX.Element {
	return (
		<>
			{/* The following JSX represents the static content of the tutorial */}
			<span style={{ fontSize: "24px" }}>
				create a postgres table of users with industry standard best practices
				email and password{" "}
			</span>
			<span style={{ fontSize: "24px" }}>
				https://www.postgresguide.com/tips/dates/
			</span>
			<span style={{ fontSize: "24px" }}>
				CREATE TABLE users ( id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE
				NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, password VARCHAR(255) NOT
				NULL );
			</span>
			<span style={{ fontSize: "24px" }}>Explanation:</span>
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						id: This is an auto-incrementing integer that serves as the primary
						key for the table.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						username: This stores the user's unique username (maximum length of
						50 characters).
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						email: This stores the user's unique email address (maximum length
						of 100 characters).
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						password: This will hold the hashed password (maximum length of 255
						characters). Remember, never store passwords in plain text.
					</span>
				</li>
			</ul>
			**
			<span style={{ fontSize: "24px" }}>
				3. Password Hashing Logic (Implemented in your application):
			</span>
			<span style={{ fontSize: "24px" }}>
				Since storing passwords in plain text is a security risk, we'll discuss
				the hashing logic outside the table creation itself. Here's a general
				outline (implementation details might vary depending on your chosen
				programming language and framework):
			</span>
			**<span style={{ fontSize: "24px" }}>a. Choose a Hashing Function:</span>
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						Popular options include bcrypt, scrypt, or Argon2. These functions
						generate a one-way hash of the password, making it impossible to
						recover the original password from the stored value.
					</span>
				</li>
			</ul>
			**<span style={{ fontSize: "24px" }}>b. Implement Salting:</span>**
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						Generate a random string (salt) for each user and append it to the
						password before hashing. This prevents pre-computed rainbow table
						attacks.
					</span>
				</li>
			</ul>
			**
			<span style={{ fontSize: "24px" }}>
				c. Hashing Process (Example in Javascript using bcrypt):
			</span>
			{/* The following code snippets are part of the tutorial text, not executable component logic */}
			<span style={{ fontSize: "24px" }}>JavaScript</span>
			<span style={{ fontSize: "24px" }}>
				const bcrypt = require('bcrypt');
			</span>
			<span style={{ fontSize: "24px" }}>
				async function createUser(username, email, password) {"{"}
			</span>
			<span style={{ fontSize: "24px" }}> ... connect to your database</span>
			<span style={{ fontSize: "24px" }}> Generate a random salt</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				const salt = await generateRandomSalt(); Replace with your salt
				generation function
			</span>
			<span style={{ fontSize: "24px" }}> Hash the password with salt</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				const hashedPassword = await bcrypt.hash(password + salt, 10); Adjust
				cost factor as needed
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				Insert user with hashed password
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				await insertUser(username, email, hashedPassword); Replace with your
				database insert function
			</span>
			<span style={{ fontSize: "24px" }}>{"}"}</span>
			<span style={{ fontSize: "24px" }}>Use code </span>
			<u>
				<span style={{ fontSize: "24px" }}>with caution.</span>
			</u>
			<span style={{ fontSize: "24px" }}>content_copy</span>
			**
			<span style={{ fontSize: "24px" }}>4. Secure Password Verification:</span>
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						When a user tries to log in, you'll receive their plain text
						password.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						Apply the same hashing function (with the same salt retrieved from
						the database for that user) to the entered password and compare it
						with the stored hashed password.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						A successful match indicates a valid login.
					</span>
				</li>
			</ul>
			**<span style={{ fontSize: "24px" }}>Remember:</span>**
			<span style={{ fontSize: "24px" }}>
				{" "}
				This is a general guide for creating a secure user table with password
				hashing. The specific implementation details will vary depending on your
				chosen programming language and database interaction methods.
			</span>
			<span style={{ fontSize: "24px" }}>
				Here's how to create a password field securely in a user table within
				PostgreSQL:
			</span>
			**<span style={{ fontSize: "24px" }}>Important Note:</span>** **
			<span style={{ fontSize: "24px" }}>
				Never store passwords in plain text!
			</span>
			**
			<span style={{ fontSize: "24px" }}>
				{" "}
				This is a major security risk. Always use hashing and salting techniques
				to protect user passwords.
			</span>
			**<span style={{ fontSize: "24px" }}>Steps:</span>**
			<ol>
				<li>
					**<span style={{ fontSize: "24px" }}>Data Type:</span>**
					<span style={{ fontSize: "24px" }}>
						{" "}
						Choose a data type suitable for storing hashed passwords. A common
						option is character varying (varchar) with a reasonable length
						(e.g., varchar(255)).
					</span>
				</li>
				<li>
					**<span style={{ fontSize: "24px" }}>Hashing Function:</span>**
					<span style={{ fontSize: "24px" }}>
						{" "}
						Select a robust password hashing function. Popular choices include
						bcrypt, scrypt, or Argon2. These functions generate a one-way hash
						of the password, making it impossible to recover the original
						password from the stored value.
					</span>
				</li>
				<li>
					**<span style={{ fontSize: "24px" }}>Salting:</span>**
					<span style={{ fontSize: "24px" }}>
						{" "}
						Implement salting to further enhance security. A salt is a random
						string appended to the password before hashing. This prevents
						attackers from pre-computing rainbow tables (a technique to crack
						passwords). You can use a function like gen_random_uuid() in
						PostgreSQL to generate random salts.
					</span>
				</li>
				<li>
					**<span style={{ fontSize: "24px" }}>Creating the Field:</span>**
					<span style={{ fontSize: "24px" }}>
						{" "}
						Use a SQL statement to create the password field in your users
						table:SQLALTER TABLE users
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						ADD COLUMN password varchar(255) NOT NULL;
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>Use code </span>
					<u>
						<span style={{ fontSize: "24px" }}>with caution.</span>
					</u>
					<span style={{ fontSize: "24px" }}>content_copy</span>
				</li>
			</ol>
			**
			<span style={{ fontSize: "24px" }}>
				Hashing and Salting Example (using pg library):
			</span>
			{/* The following code snippets are part of the tutorial text, not executable component logic */}
			<span style={{ fontSize: "24px" }}>JavaScript</span>
			<span style={{ fontSize: "24px" }}>
				const {"{"}Client{"}"} = require('pg');
			</span>
			<span style={{ fontSize: "24px" }}>
				... your database connection details
			</span>
			<span style={{ fontSize: "24px" }}>
				async function createUser(username, password) {"{"}
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				const client = await new Client();
			</span>
			<span style={{ fontSize: "24px" }}> try {"{"}</span>
			<span style={{ fontSize: "24px" }}> await client.connect();</span>
			<span style={{ fontSize: "24px" }}> Generate a random salt</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				const salt = await client.query('SELECT gen_random_uuid() AS salt');
			</span>
			<span style={{ fontSize: "24px" }}> Hash the password with salt</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				const hashedPassword = await bcrypt.hash(password + salt.rows[0].salt,
				10); Adjust cost factor as needed
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				Insert user with hashed password
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				await client.query('INSERT INTO users (username, password) VALUES ($1,
				$2)', [username, hashedPassword]);
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				console.log('User created successfully!');
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				{"}"} catch (error) {"{"}
			</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				console.error('Error creating user:', error);
			</span>
			<span style={{ fontSize: "24px" }}> Handle errors appropriately</span>
			<span style={{ fontSize: "24px" }}>
				{" "}
				{"}"} finally {"{"}
			</span>
			<span style={{ fontSize: "24px" }}> await client.end();</span>
			<span style={{ fontSize: "24px" }}> {"}"}</span>
			<span style={{ fontSize: "24px" }}>{"}"}</span>
			<span style={{ fontSize: "24px" }}>Use code </span>
			<u>
				<span style={{ fontSize: "24px" }}>with caution.</span>
			</u>
			<span style={{ fontSize: "24px" }}>content_copy</span>
			**<span style={{ fontSize: "24px" }}>Explanation:</span>**
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						This example uses the bcrypt library for password hashing (install
						with npm install bcrypt).
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						It generates a random salt using gen_random_uuid().
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						The password is concatenated with the salt before hashing with
						bcrypt.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						The cost factor (10 in this example) controls the hashing intensity.
						Adjust it based on your security needs.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						The hashed password is stored in the password field of the user
						table.
					</span>
				</li>
			</ul>
			**<span style={{ fontSize: "24px" }}>Verification:</span>**
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						When a user attempts to log in, you'll receive their plain text
						password.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						Apply the same hashing function (with the same salt) to the entered
						password and compare it with the stored hashed password.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						A successful match indicates a valid login.
					</span>
				</li>
			</ul>
			**<span style={{ fontSize: "24px" }}>Additional Considerations:</span>**
			<ul>
				<li>
					<span style={{ fontSize: "24px" }}>
						Consider using a prepared statement to prevent SQL injection
						vulnerabilities.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						Implement password reset mechanisms to allow users to recover
						forgotten passwords securely.
					</span>
				</li>
				<li>
					<span style={{ fontSize: "24px" }}>
						Regularly update your password hashing function to stay ahead of
						evolving security threats.
					</span>
				</li>
			</ul>
			<span style={{ fontSize: "24px" }}>
				By following these steps and best practices, you can create a secure
				password field in your PostgreSQL user table. Always prioritize user
				data security when handling passwords.
			</span>
		</>
	);
}
