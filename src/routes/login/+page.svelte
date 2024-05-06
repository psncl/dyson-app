<script>
	import { enhance } from '$app/forms';
	let pwdInputType = 'text';

	const togglePassword = () => {
		if (pwdInputType === 'password') {
			pwdInputType = 'text';
		} else {
			pwdInputType = 'password';
		}
	};

	export let form;
</script>

<div class="login-form-container">
	<div class="logo">
		<img src="/dyson_logo.svg" alt="Dyson logo" />
		<p>Warehouse</p>
	</div>
	<p class="slogan">Recycled. Refurbished. Renewed.</p>
	<form class="login-forms" method="post" use:enhance>
		<input name="username" type="text" class="input-box" placeholder="Username" required />
		<div class="password-container">
			<input
				name="password"
				type={pwdInputType}
				class="input-box"
				placeholder="Password"
				required
			/>
			<button class="icon-show-password" on:click|preventDefault={togglePassword}>&#128065;</button>
		</div>
		{#if form?.error}<p class="form-error">{form.error}</p>{/if}
		<button class="submit-btn" type="submit">Login</button>
	</form>
</div>

<style>
	.login-form-container {
		min-height: 100vh;
		color: #fff;
	}

	.login-form-container {
		width: 500px;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		justify-content: center;
		margin: 0 auto;
	}

	.logo {
		display: flex;
		flex-direction: column;
	}

	.logo img {
		width: 80%;
	}

	.logo p {
		align-self: flex-end;
		margin-top: -2rem;
		font-size: 3rem;
	}

	.login-forms {
		color: #000;
	}

	.slogan {
		font-size: 2rem;
		text-align: center;
	}

	.input-box,
	.submit-btn {
		height: 4rem;
		border-radius: 2rem;
		padding: 5px 20px;
		font-family: inherit;
		font-size: 2rem;
	}

	.submit-btn {
		width: 50%;
		background-color: #7bb836;
		align-self: center;
	}

	.login-forms {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 4rem;
	}

	.input-box {
		width: 100%;
		border: 4px solid #fff;
		outline: none;
	}

	.input-box:focus {
		border: 4px solid #7bb836;
		outline: none;
	}

	.password-container {
		position: relative;
	}

	.icon-show-password {
		position: absolute;
		color: #67992d;
		font-size: 3rem;
		right: 2rem;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		user-select: none;
	}

	.icon-show-password:active {
		color: #000;
	}

	.form-error {
		color: yellow;
	}
</style>
