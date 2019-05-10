<template>
	<div  class="about">

		<b-container>

			<b-row>
			
				<b-col cols="8">
					<h5 id="about">About Me</h5>
					<p>Welcome to my online portfolio.
						My name is Yannick Willems and I'm an Information Technology student at Avans University in Breda.<br />
						My interests currently lie in developing web-based applications, but I always enjoy learning new
						things. You can find more information about the projects I've been working on recently, on this page and on my GitHub linked below.</p>
				</b-col>

				<b-col cols="4">
					<b-img src="../assets/face.png" thumbnail fluid rounded="circle" v-bind="{width: '150%'}"></b-img>
				</b-col>
			</b-row>

		</b-container>

	</div>
</template>

<script>
export default {
	name: 'About'
}
</script>