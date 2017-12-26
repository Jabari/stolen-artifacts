<template>
	<div id="landing-page-experience">
		<div class="above-the-fold record-gif">
			<button id="logo--spinning" class="logo" :class="welcomeAnimation === true ? 'user-welcome-sequence' : ''">
				<div class="sa">
					a
				</div>
			</button>
			<button id="nutt--spinning" class="logo" :class="welcomeAnimation === true ? 'user-welcome-sequence' : ''">
				<!-- <img src='data:image/svg+xml;utf8,<svg viewBox="0 0 100 100"><use xlink:href="./static/walnut.svg#walnut"></use></svg>'> -->
				<img class="nutt" src="../static/walnut.svg">
			</button>
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
			//that.welcomeAnimation = true;
		})
		setTimeout(function() {
			//that.$router.push('/sapiens')
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
		display: flex;
		flex-flow: row wrap;
		&.record-gif {
			background-image: url('https://s3-us-west-2.amazonaws.com/stolenartifacts.com/imgs/black-white.gif');
			background-repeat: no-repeat;
			background-size: cover;
			height: 100vh;
		}
		.logo {
			background: #fff;
			color: #000;
			font-size: 10rem;
    	opacity: 1;
    	position: relative;
			perspective-origin: bottom;
			min-width: 200px;
			width: 50%;
		}
		#logo--spinning {
			.sa {
				height: 10rem;
    		font-size: 11rem;
				position: absolute;
				left: 50%;
				line-height: 7.5rem;
		    top: 50%;
		    transform: translate(-50%, -50%);
			}
			&:before {
				content: '~';
				display: block;
				margin-top: -10rem;
    		height: 15rem;
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
		#nutt--spinning {

			.nutt {
			  height: 10rem;
		    position: absolute;
		    top: 50%;
		    transform: translate(-50%, -50%);
			}
		}
		@media only screen and (max-width: 399px) {
			.logo {
				width: 100% !important;
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