document.querySelector('button').addEventListener('click', function () {
	const username = document.getElementById('username').value.trim();
	if (!username) return;
	fetch(`https://api.github.com/users/${username}`)
		.then((res) => {
			if (!res.ok) {
				const error = document.createElement('p');
				error.style.color = 'red';
				error.innerText = `No user found with username: ${username}`;
				document
					.querySelector('main')
					.insertBefore(error, document.querySelector('table'));
				setTimeout(() => error.remove(), 5000);
				throw new Error(`No user found with username: ${username}`);
			}
			return res.json();
		})
		.then((data) => {
			console.log(data);
			document.getElementById('fullName').innerText = data.name || '';
			document.getElementById('bio').innerText = data.bio || '';
			const img = document.getElementById('profilePicture');
			img.src = data.avatar_url;
			img.alt = data.login;
			document.getElementById(
				'homeUrl'
			).innerHTML = `<a href="${data.html_url}" target="_blank">${data.html_url}</a>`;
		})
		.catch((err) => {
			console.error(err);
		});
});
