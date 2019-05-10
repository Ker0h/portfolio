<template>
	<div class="about">

		<b-container>

			<b-row>
			
				<b-col cols="12" md="8" order="12" order-md="1">
					<h5>About Me</h5>
					<p>Welcome to my online portfolio.
						My name is Yannick Willems and I'm an Information Technology student at Avans University in Breda.<br />
						My interests currently lie in developing web-based applications, but I always enjoy learning new
						things. You can find more information about the projects I've been working on recently, on this page and on my GitHub linked below.</p>
				</b-col>

				<b-col cols="12" md="4" order="1" order-md="12" offset="3" offset-md="0">
					<b-img src="../assets/face.png" thumbnail fluid rounded="circle" v-bind="{width: '150%'}" style="margin-bottom: 10px;"></b-img>
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