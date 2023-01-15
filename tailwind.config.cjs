const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				"fade-in-up": {
				  "0%": {
					opacity: "0",
					transform: "translateY(20px)",
				  },
				  "100%": {
					opacity: "1",
					transform: "translateY(0)",
				  },
				},
				'fade-out-down': {
				  'from': {
					  opacity: '1',
					  transform: 'translateY(0px)'
				  },
				  'to': {
					  opacity: '0',
					  transform: 'translateY(10px)'
				  },
			  },
			  },
			  animation: {
				"fade-in-up": "fade-in-up 0.25s ease-out",
				'fade-out-down': 'fade-out-down 0.25s ease-out',
			  },
		}
	},

	plugins: []
};

module.exports = config;
