<template>
	<main id="sa">
		<section>
			<h2>Stolen Artifacts is</h2>
			<h1>
				Coming Soon!
			</h1>
		</section>
		
	</main>
</template>
<script>
	export default {
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>
<style lang="scss">
h1 {
	font-size: 3rem;	
}
main#sa {
	background: #000;
	height: 100vh;
	width: 100vw;
}
section {
	color: #fff;
	text-align: center;
	position: fixed;
	top: 33%;
	width: 100%;
}
</style>
