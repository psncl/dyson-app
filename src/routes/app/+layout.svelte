<script>
	import UserDropdown from './UserDropdown.svelte';
</script>

<nav>
	<div class="home-and-logo">
		<a href="/app" class="home-icon-container">
			<img src="/home.png" class="home-icon" alt="home-icon" />
		</a>
		<img src="/dyson_logo.svg" alt="dyson logo" class="logo" />
	</div>
	<div class="nav-links">
		<ul>
			<a href="/app/logproduct">Log New Products</a>
			<a href="/app/viewproducts">View Logged Products</a>
			<a href="/app/statistics">View Statistics</a>
			<a href="/app/users/manage">Manage Users</a>
		</ul>
		<div class="user-icon">
			<UserDropdown />
		</div>
	</div>
</nav>

<div class="component-container">
	<slot />
</div>

<style>
	* {
		padding: 3px 0;
		margin: 0;
		box-sizing: border-box;
	}
	nav {
		background-color: var(--bg-accent-color);
		min-height: 3.75rem;
		height: 5vh;
		display: flex;
		gap: 6.25rem;
		justify-content: space-between;
		align-items: center;
	}

	.home-and-logo {
		display: flex;
		gap: 1.25rem;
		height: 100%;
		margin-left: 2.5rem;
	}

	.home-icon-container {
		height: 100%;
	}

	.home-icon {
		height: 80%;
		filter: invert(100%);
	}

	.home-icon:hover {
		transform: scale(1.1);
		transition: all 0.1s ease;
	}

	.nav-links {
		display: flex;
	}

	.logo {
		max-height: 100%;
	}

	ul {
		display: flex;
		gap: 3.2rem;
		margin-right: 2.5rem;
	}

	a:link,
	a:visited {
		color: #fff;
		text-decoration: none;
		font-size: 1.8rem;
	}

	a:hover {
		color: var(--dyson-color);
		transform: scale(1.1);
		transition: all 0.1s ease;
	}

	.user-icon {
		margin-right: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.user-icon:hover {
		transform: scale(1.2);
		transition: all 0.1s ease;
	}

	.component-container {
		overflow: auto;
		margin-bottom: 1.2rem;
		height: 85vh;
	}
</style>
