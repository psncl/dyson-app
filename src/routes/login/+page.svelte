<script>
	let pwdInputType = 'text';

	const togglePassword = () => {
		console.log('test');
		if (pwdInputType === 'password') {
			pwdInputType = 'text';
		} else {
			pwdInputType = 'password';
		}
	};
</script>

<div class="login-form-container">
	<div class="logo">
		<!-- <img src="Dyson_logo.svg" alt="Dyson logo" /> -->
		<img src="/dyson_logo.svg" alt="Dyson logo" />
		<p>Warehouse</p>
	</div>
	<p class="slogan">Recycled. Refurbished. Renewed.</p>
	<form class="login-forms">
		<input name="username" type="text" class="input-box" placeholder="Username" />
		<div class="password-container">
			<input name="password" type={pwdInputType} class="input-box" placeholder="Password" />
			<button class="icon-show-password" on:click|preventDefault={togglePassword}>&#128065;</button>
		</div>
		<button class="submit-btn" type="submit" on:click|preventDefault>Login</button>
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
		gap: 2rem;
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
		font-size: 3.6rem;
	}

	.login-forms {
		color: #000;
	}

	.slogan {
		font-size: 2.8rem;
		text-align: center;
	}

	.input-box,
	.submit-btn {
		height: 6rem;
		border-radius: 3rem;
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
	}

	.password-container {
		position: relative;
	}

	.icon-show-password {
		position: absolute;
		color: #67992d;
		font-size: 5rem;
		right: 2rem;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		user-select: none;
	}

	.icon-show-password:active {
		color: #000;
	}
</style>
