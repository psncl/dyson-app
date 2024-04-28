<nav>
	<img src="/dyson_logo.svg" alt="dyson logo" class="logo" />
	<div class="nav-links">
		<ul>
			<a href="/app/logproduct">Dashboard</a>
			<a href="/">Log New Products</a>
			<a href="/">View Logged Products</a>
			<a href="/">Manage Users</a>
		</ul>
		<a href="/" class="user-icon">
			<img src="/user-circle-icon.svg" alt="user-icon" />
		</a>
	</div>
</nav>

<slot />

<style>
	* {
		padding: 3px 0;
		margin: 0;
		box-sizing: border-box;
	}
	nav {
		background-color: var(--bg-accent-color);
		min-height: 6rem;
		height: 5vh;
		display: flex;
		gap: 10rem;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		display: flex;
	}

	.logo {
		max-height: 100%;
		margin-left: 4rem;
	}

	ul {
		display: flex;
		gap: 5rem;
		margin-right: 4rem;
	}

	a:link,
	a:visited {
		color: #fff;
		text-decoration: none;
		font-size: 2.5rem;
	}

	a:hover {
		color: var(--dyson-color);
		transform: scale(1.1);
		transition: all 0.1s ease;
	}

	.user-icon {
		margin-right: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.user-icon img:hover {
		transform: scale(1.2);
		transition: all 0.1s ease;
	}
</style>
