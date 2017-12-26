<template>
	<div id="landing-page-experience">
		<div class="above-the-fold record-gif">
			<div id="logo--spinning" :class="welcomeAnimation === true ? 'user-welcome-sequence' : ''">
				a
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'FrontPage',
	data() {
		return {
			welcomeAnimation: false
		}
	},
	methods: {
	
	},
	mounted() {
		var that = this;

		setTimeout(function() {
			that.welcomeAnimation = true;
		})
		setTimeout(function() {
			that.$router.push('/sapiens')
		}, 10000)
		
		// method that listens for drag-left/swipe-left event and spins the ~ 
		// and slowly fades the div to reveal record gif
	}
}
</script>
<style lang="scss">
$welcome-delay: 5s;
$welcome-duration: 6s;
#landing-page-experience {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 100vw;

	.above-the-fold {
		background: #010101;
		&.record-gif {
			background-image: url('https://s3-us-west-2.amazonaws.com/stolenartifacts.com/imgs/black-white.gif');
			background-repeat: no-repeat;
			background-size: cover;
			height: 100vh;
		}
		#logo--spinning {
			background: #fff;
			color: #000;
			font-size: 10rem;
    	opacity: 1;
			height: 100%;
			perspective-origin: bottom;
			&:before {
				content: '~';
				display: block;
			}
			&.user-welcome-sequence {
				opacity: 0;
				transition: opacity $welcome-duration $welcome-delay;
				&:before {
					animation: user-welcome-animation 2s linear $welcome-delay infinite;
					transform-origin: center 18rem;
				}
			}
		}
	}
}

@keyframes user-welcome-animation {
	from {
		transform: rotate(0turn);
	}
	to {
		transform: rotate(1turn);
	}
}
</style>