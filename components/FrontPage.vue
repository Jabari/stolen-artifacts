<template>
	<div id="landing-page-experience">
		<div class="above-the-fold record-gif">
			<button id="sa--spinning" class="logo" @click="transitionToPage('sa')" 
				:class="welcomeAnimation === 'sa' ? 'user-welcome-sequence' : ''">
				<div class="sa">
					a
				</div>
			</button>
			<button id="nutt--spinning" class="logo" @click="transitionToPage('nutt')" 
				:class="welcomeAnimation === 'nutt' ? 'user-welcome-sequence' : ''">
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
			welcomeAnimation: null
		}
	},
	methods: {
		transitionToPage(page) {
			this.welcomeAnimation = page;
			var that = this;
			var unselectedButton;

			setTimeout(function(){
				unselectedButton = document.querySelector('.logo:not(.user-welcome-sequence)');
				unselectedButton.classList += " hide";
				
				setTimeout(function() {
					unselectedButton.style.display = 'none';
					that.$router.push(page);
				}, 5000);
			
			}, 200)

		}
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
	},
	transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>
<style lang="scss">
$welcome-delay: 3s;
$welcome-duration: 6s;

%unselected-logos {
	min-width: 0;
	opacity: 0;
	width: 0% !important;
}

#landing-page-experience {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 100vw;

	.above-the-fold {
		background: #010101;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		//flex-flow: row wrap;
		&.record-gif {
			background-image: url('https://s3-us-west-2.amazonaws.com/stolenartifacts.com/imgs/black-white.gif');
			background-repeat: no-repeat;
			background-size: cover;
			height: 100vh;
		}
		.logo {
			background: #fff;
			border: 0;
			color: #000;
			display: block;
			font-size: 10rem;
    	opacity: 1;
    	position: relative;
			perspective-origin: bottom;
			transition: height $welcome-delay, width $welcome-delay, opacity $welcome-duration;
			width: 50%;
			&:hover {
				box-shadow: 0px 0px 8px 5px #aaa inset;
			}
			&.user-welcome-sequence {
				height: 100% !important;
				width: 100vw !important;
				animation: disappear $welcome-duration linear $welcome-delay 1;
				animation-fill-mode: forwards;
				&:before {
					animation: user-welcome-animation $welcome-delay/3 linear $welcome-delay infinite;
					transform-origin: center 18rem;
				}
				&#nutt--spinning .nutt {
					
				}
				&:hover {
					box-shadow: none;
				}
			}
			&.hide {
				@extend %unselected-logo;
				min-width: 0;
				opacity: 0;
				width: 0% !important;
			}
			&:not(.user-welcome-sequence) {
				min-width: 0 !important;
				$notselected: &;
				~ .user-welcome-sequence {
					#{$notselected} {
						min-width: 0 !important;
						width: 0;
						@extend %unselected-logos;
					}
				}
			}
		}
		#sa--spinning {
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
		}
		#nutt--spinning {

			.nutt {
			  height: 10rem;
		    position: absolute;
		    top: 50%;
		    transform: translate(-50%, -50%);
			}
		}
	}
}
@media only screen and (max-width: 399px) {
			%unselected-logo {
				min-height: 0;
				opacity: 0;
				height: 0% !important;
			}
			#landing-page-experience .above-the-fold {
				flex-direction: column;
			}
			.logo {
				height: 50% !important;
				width: 100% !important;
				&.hide {
					@extend %unselected-logo;
					min-width: 0;
					opacity: 0;
					height: 0% !important;
				}
				&.user-welcome-sequence {
					transition: all $welcome-duration $welcome-delay;
					transition: height $welcome-delay;
					height: 100% !important;
					 .logo {
						transition: height $welcome-delay;
						height: 0;
						opacity: 0%;
					}
				}
				&:not(.user-welcome-sequence) {
					min-width: 100% !important;
					$notselected: &;
					~ .user-welcome-sequence {
						#{$notselected} {
							min-heigth: 0% !important;
							width: 0;
							@extend %unselected-logo;
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

@keyframes disappear {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>