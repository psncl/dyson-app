<script>
	let disabledSubmit = false;
	let errorInForm;
	let errorMessage = '';

	let formData = { fname: '', lname: '', userid: '', userRole: '', pwd1: '', pwd2: '' };

	function showError(errorMsg) {
		errorMessage = errorMsg;
		errorInForm = true;
	}

	function submitForm() {
		if (Object.values(formData).some((val) => val === '')) {
			showError('All values must be filled!');
			return;
		}
		if (formData.pwd1 !== formData.pwd2) {
			showError("Passwords don't match!");
			return;
		}
		errorInForm = false;
	}
</script>

<div class="container">
	<header>
		<a href="/app/users/manage">← Back</a>
		<h2>Create New User</h2>
	</header>

	{#if errorInForm}
		<div class="error-form">{errorMessage}</div>
	{/if}

	<form id="user_form" action="#" method="post">
		<div class="input-box">
			<label for="fname">First Name:</label>
			<input type="text" placeholder="First Name" bind:value={formData.fname} id="fname" required />
		</div>
		<div class="input-box">
			<label for="lname">Last Name:</label>
			<input type="text" placeholder="Last Name" bind:value={formData.lname} id="lname" required />
		</div>
		<div class="input-box">
			<label for="userid">User ID:</label>
			<input bind:value={formData.userid} id="userid" type="text" placeholder="User ID" required />
		</div>
		<div class="input-box">
			<label for="userrole">Role:</label>
			<select id="userrole" bind:value={formData.userRole} placeholder="Select a role" required>
				<option value="" disabled selected>Select a role</option>
				<option value="junior_associate">Junior Logistics and Shipping Associate</option>
				<option value="senior_associate">Senior Logistics and Shipping Associate</option>
				<option value="manager">Manager of Operations</option>
			</select>
		</div>
		<div class="input-box">
			<label for="pwd1">Password:</label>
			<input bind:value={formData.pwd1} type="password" id="pwd1" placeholder="Password" required />
		</div>
		<div class="input-box">
			<label for="pwd2">Confirm Password:</label>
			<input
				bind:value={formData.pwd2}
				type="password"
				id="pwd2"
				placeholder="Confirm Password"
				required
			/>
		</div>

		<button
			type="submit"
			class="creation_btn"
			disabled={disabledSubmit}
			on:click|preventDefault={submitForm}>Create User</button
		>
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

	.error-form {
		background-color: #d61818;
		font-size: 2rem;
		color: #fff;
		width: 75%;
		margin: 0.5rem auto;
		padding: 0 1rem;
		border-radius: 0.5rem;
		text-align: center;
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

	#userrole option {
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
		background-color: #7bb836;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.creation_btn:hover {
		background-color: #99e445;
	}
</style>
