<template>
	<div class="about">

		<b-container>

			<b-row>
				<b-col cols="4" offset="4" sm="12" offset-sm="0">
					<b-img src="../assets/face.png" thumbnail fluid rounded="circle" v-bind="{width: '100%'}"></b-img>
				</b-col>
			</b-row>

			<b-row id="#about">
				<b-col>
					<h4>About Me</h4>
					<!-- TODO: Put paragraphs in seperate columns -->
					<p>Welcome to my online portfolio.
						My name is Yannick Willems and I'm an Information Technology student at Avans University in Breda.<br />
						My interests currently lie in developing web-based applications, but I always enjoy learning new
						things.<br />
						You can find more information about the projects I've been working on recently, on this page and on my
						GitHub linked below.</p>
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