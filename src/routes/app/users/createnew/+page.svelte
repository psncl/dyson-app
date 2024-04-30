<script>
</script>

<div class="container">
	<header>
		<a href="/app/users/manage">← Back</a>
		<h2>Create New User</h2>
	</header>

	<form id="user_form" action="#">
		<div class="input-box">
			<label for="fname">First Name:</label>
			<input type="text" placeholder="First Name" name="fname" id="fname" required />
		</div>
		<div class="input-box">
			<label for="lname">Last Name:</label>
			<input type="text" placeholder="Last Name" name="lname" id="lname" required />
		</div>
		<div class="input-box">
			<label for="user_id">User ID:</label>
			<input name="user_id" id="user_id" type="text" placeholder="User ID" required />
		</div>
		<div class="input-box">
			<label for="user_roles">Role:</label>
			<select id="user_roles" name="creation_role" placeholder="Select a role" required>
				<option value="" disabled selected>Select a role</option>
				<option value="junior_associate">Junior Logistics and Shipping Associate</option>
				<option value="senior_associate">Senior Logistics and Shipping Associate</option>
				<option value="manager">Manager of Operations</option>
			</select>
		</div>
		<div class="input-box">
			<label for="p1">Password:</label>
			<input name="p1" type="password" id="p1" placeholder="Password" required />
		</div>
		<div class="input-box">
			<label for="p2">Confirm Password:</label>
			<input name="p2" type="password" id="p2" placeholder=" Confirm Password" required />
		</div>

		<button type="submit" class="creation_btn">Create</button>
	</form>
</div>

<style>
	@import '$lib/app.css';

	.container {
		width: 70%;
		margin: 5rem auto 0 auto;
	}

	header {
		background-color: var(--bg-accent-color);
		color: white;
		text-align: center;
		padding: 1rem 0;
		grid-column: 1 / -1;
		position: relative;
		border-radius: 0.3rem;
	}

	header {
		border-radius: 0.5rem;
	}

	header h2 {
		font-size: 2rem;
		font-weight: 500;
	}

	header a:link,
	header a:visited {
		text-decoration: none;
		color: var(--dyson-color);
		font-size: 1.25rem;
		position: absolute;
		left: 1.25rem;
		top: 0.5rem;
		transform: translateY(50%);
	}

	header a:hover {
		transform: scale(1.1) translateY(50%);
		transition: transform 0.1s ease;
	}

	/* Tushar's code:*/
	#user_form {
		display: grid;
		grid-template-rows: repeat(7, 1fr);
		justify-content: center;
		align-items: center;
		gap: 40px;
		border: solid 1px #000;
		border-radius: 0.3rem;
		padding: 2rem;
	}

	.input-box label,
	.input-box select,
	.input-box input {
		font-size: 2rem;
	}

	.input-box input,
	.input-box select {
		width: 50rem;
		padding: 0.5rem;
		border: 2px solid #979797;
		border-radius: 0.5rem;
	}

	.input-box {
		display: flex;
		justify-content: space-between;
	}

	#user_roles option {
		font-size: 1.5rem;
	}

	.input-box select {
		font-size: 30px;
		margin-left: 329px;
		opacity: 0.7;
	}

	.creation_btn {
		display: flex;
		justify-content: center;
		font-size: 2.5rem;
		background: #7bb836;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.creation_btn:hover {
		background-color: #99e445;
	}
</style>
