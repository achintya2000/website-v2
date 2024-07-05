<template>
    <UContainer>
        <v-card variant="plain" class="mx-auto my-4" max-width="800">
            <v-card-item>
                <v-card-title class="text-h4 font-weight-black">
                    Experience
                </v-card-title>
            </v-card-item>
        </v-card>

        <v-card v-for="experience in Experiences" :key="experience.title" variant="tonal" class="mx-auto my-4"
            max-width="800">

            <v-img :src="experience.image" max-height="200px" cover></v-img>

            <v-card-title>
                {{ experience.title }}
            </v-card-title>

            <v-card-subtitle>
                {{ experience.company }}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn>Share</v-btn>
                <v-btn color="blue">Explore</v-btn>
                <v-spacer></v-spacer>
                <v-btn :icon="experience.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="experience.show = !experience.show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="experience.show">
                    <v-divider></v-divider>
                    <v-card-text>{{ experience.description }}</v-card-text>
                </div>
            </v-expand-transition>
        </v-card>

    </UContainer>
</template>

<script>
export default {
    data: () => ({
        show: false,
        Experiences: [
            {
                title: "CEO",
                image: "/experience4.jpg",
                company:
                    "InstaJam, LLC",
                description:
                    "",
                show: false,
            },
            {
                title: "SDE Intern - AR R&D",
                image: "/experience4.jpg",
                company:
                    "Amazon Robotics",
                description:
                    "Innovated in tote palletization process by exploring the Mixed Reality space for efficiency improvements and data flow visualization opportunities. Designed, developed, and tested a mixed reality application for the Microsoft HoloLens 2. Integrated the HoloLens 2 device with AWS for a cloud based infrastructure. Demoed results and garnered key stakeholder interest for future development opportunities in the Mixed Reality Fulfillment Center space.",
                show: false,
            },
            {
                title: "Undergrad Researcher",
                image: "/experience3.png",
                company:
                    "Intelligent Interactive Internet of Things Lab - Duke University",
                description:
                    "Automated functionality to reduce email analysis time which improved efficiency by 20% and saved at least 10 hours weekly. Developed and engineered 3 automation solutions to streamline the workflow of security analysts. Challenge was to increase efficiency as email analysis was consuming the entire work week. Integrated various backend services through APIs and authored technical documentation",
                show: false,
            },
            {
                title: "SDE Intern - Cybersecurity and Automation",
                image: "/experience1.jpeg",
                company: "NetApp",
                description:
                    "Automated functionality to reduce email analysis time which improved efficiency by 20% and saved at least 10 hours weekly. Developed and engineered 3 automation solutions to streamline the workflow of security analysts. Challenge was to increase efficiency as email analysis was consuming the entire work week. Integrated various backend services through APIs and authored technical documentation",
                show: false,
            },
            {
                title: "SDE Intern - Web Development",
                image: "/experience2.jpg",
                company: "NetApp",
                description:
                    "Spearheaded the development of new front end technologies resulting in improved workflow experiences. Partnered with a global team to overhaul the design of the internal case tracking tool. Improved case tracking efficiency by 70% for Support Engineers using a customized framework. Showcased my project to company executives and employees and received several accolades.",
                show: false,
            }
        ]
    }),
}
</script>