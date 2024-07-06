<template>
    <UContainer>
        <v-card variant="plain" class="mx-auto my-4" max-width="800">
            <v-card-item>
                <v-card-title class="text-h4 font-weight-black">
                    Education
                </v-card-title>
            </v-card-item>
        </v-card>

        <v-timeline direction="vertical" theme="dark">

            <v-timeline-item>
                <template v-slot:opposite>
                    Expected May 2027
                </template>
                <v-card variant="tonal" elevation="24" class="mx-auto my-4">
                    <v-img src="/education3.png" max-height="200px" cover></v-img>

                    <v-card-title>Georgia Tech</v-card-title>
                    <v-card-text class="text--white">
                        Masters in Computer Science, Specialization in Machine Learning
                    </v-card-text>
                </v-card>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    May 2022
                </template>
                <v-card variant="tonal" elevation="24" class="mx-auto my-4">
                    <v-img src="/education2.jpg" max-height="200px" cover></v-img>

                    <v-card-title>Duke University</v-card-title>
                    <v-card-text class="text--white">
                        <p>
                            BS Electrical & Computer Engineering, BS Computer Science
                        </p>
                        <p>
                            Minor Finance
                        </p>
                        <p>
                            GPA: 3.84, Cum Laude
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" text="Learn More" variant="text" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <v-card v-if="show" class="position-absolute w-100" height="100%" style="bottom: 0;">
                            <v-card-text class="pb-0">
                                <p class="text-h6"> Relevant Coursework:</p>

                                <p class="text-medium-emphasis">
                                <ul class="pl-5" v-for="course in courses">
                                    <li> {{ course }}</li>
                                </ul>
                                </p>
                            </v-card-text>

                            <v-card-actions class="pt-0">
                                <v-btn color="primary" text="Close" variant="text" @click="show = !show"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expand-transition>
                </v-card>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    May 2018
                </template>

                <v-card variant="tonal" elevation="24" class="mx-auto my-4">
                    <v-card-title>Graduation from Panther Creek HS</v-card-title>
                    <v-card-text class="text--white">
                        Weighted GPA: 5.23, Unweighted GPA: 4.0, ACT: 35
                    </v-card-text>
                </v-card>

            </v-timeline-item>
        </v-timeline>
    </UContainer>
</template>

<script>
export default {
    data: () => ({
        show: false,
        courses: [
            "Advanced Software Design and Implementation",
            "Computer Architechture",
            "Digital Systems",
            "Intro to Robotics",
            "Operating Systems",
            "Computer Network Architecture",
            "Design and Analysis of Algorithms",
            "Computer Security",
            "Mobile App Development",
            "Asset Pricing & Risk Management",
            "Linear Algebra & Differential Equations",
            "Ordinary & Partial Differential Equations",
            "Signals & Systems",
            "Fields & Waves"
        ]
    })
}
</script>