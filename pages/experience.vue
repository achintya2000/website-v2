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
                <v-btn color="blue" target="_blank" :href="experience.explore">Explore</v-btn>
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
                title: "Forward Deployed Software Engineer",
                image: "/experience7.jpg",
                company: "Palantir Technologies",
                description:
                    "Led Cloud Next-Gen Firewall (CNGFW) integration with Palo Alto Networks SSO; enhancing security, user experience, and customer growth by 15%. Successfully implemented cross tenant support for users and maintained backwards compatibility with Cognito and Okta SSO login systems. Optimized subscription process by migrating the AWS Marketplace experience from Moonwalk to Quick Launch; completed within a tight three-week deadline, demonstrating capability in rapid knowledge transfer, high-quality code delivery, and cross-team communication. \
                    Spearheaded the development of CNGFW AppUsage, leveraging Go for a high-performance microservices infrastructure that enhances traffic visibility for customers. Key feature for securing a $2m enterprise deal with Mastercard. Integral in the microservices architecture design which utilized AWS EKS, ECR, Docker, and Kubernetes to outperform current serverless design and thus be adopted for future projects. Boosted enterprise customer acquisition by 30% through leading development of the Tiered Billing project. Delivered a competitive pricing model update, optimized AWS billing architecture to improve performance, and created a new billing visualization dashboard for users. \
                    Developed event integration with Datadog Dashboards, significantly improving service health visibility and customer issue remediation speed. Co-led the development of the AWS Private Offers feature, driving customer acquisition growth and securing over \$1M in contracts with Gartner \& BP through discounted SaaS deals for Cloud NGFW. Rapidly developed and deployed a secure mTLS-based API Gateway Infra for CNGFW integration with Panorama for critical product demos. Led the development of a customer onboarding workflow tracking system, integrating event tracking with GCP BigQuery DataLake to build dashboards that visualize customer acquisition flow and key drop-off points, serving as the foundation for future product insights infrastructure. \
                    Designed and implemented a modular Sendgrid based email notification system for sending customer updates on billing, contracts and user management; seamlessly integrated with Lambda and SQS to provide a highly available platform for production sending 500+ emails per month.",
                show: false,
                explore: "https://www.palantir.com/warpspeed/"
            },
            {
                title: "Software Engineer",
                image: "/experience6.png",
                company: "Palo Alto Networks",
                description:
                    "Led Cloud Next-Gen Firewall (CNGFW) integration with Palo Alto Networks SSO; enhancing security, user experience, and customer growth by 15%. Successfully implemented cross tenant support for users and maintained backwards compatibility with Cognito and Okta SSO login systems. Optimized subscription process by migrating the AWS Marketplace experience from Moonwalk to Quick Launch; completed within a tight three-week deadline, demonstrating capability in rapid knowledge transfer, high-quality code delivery, and cross-team communication. \
                    Spearheaded the development of CNGFW AppUsage, leveraging Go for a high-performance microservices infrastructure that enhances traffic visibility for customers. Key feature for securing a $2m enterprise deal with Mastercard. Integral in the microservices architecture design which utilized AWS EKS, ECR, Docker, and Kubernetes to outperform current serverless design and thus be adopted for future projects. Boosted enterprise customer acquisition by 30% through leading development of the Tiered Billing project. Delivered a competitive pricing model update, optimized AWS billing architecture to improve performance, and created a new billing visualization dashboard for users. \
                    Developed event integration with Datadog Dashboards, significantly improving service health visibility and customer issue remediation speed. Co-led the development of the AWS Private Offers feature, driving customer acquisition growth and securing over \$1M in contracts with Gartner \& BP through discounted SaaS deals for Cloud NGFW. Rapidly developed and deployed a secure mTLS-based API Gateway Infra for CNGFW integration with Panorama for critical product demos. Led the development of a customer onboarding workflow tracking system, integrating event tracking with GCP BigQuery DataLake to build dashboards that visualize customer acquisition flow and key drop-off points, serving as the foundation for future product insights infrastructure. \
                    Designed and implemented a modular Sendgrid based email notification system for sending customer updates on billing, contracts and user management; seamlessly integrated with Lambda and SQS to provide a highly available platform for production sending 500+ emails per month.",
                show: false,
                explore: "https://www.paloaltonetworks.com/network-security/cloud-ngfw"
            },
            {
                title: "CEO",
                image: "/experience5.png",
                company:
                    "InstaJam, LLC",
                description:
                    "Co-founder and CEO of defense industry start-up focused on Electronic Warfare (EW) jamming detection and countermeasures. Raised $2m in funding: awarded Department of Defense STTR Seq. Phase 2 [$1.3m], Phase 2 [$750k] and STTR Phase 1 grant [$50k]. PI (Principal Investigator) for all grants. Led a team of ∼10 across multiple organizations developing a mobile ATAK app for warfighters to detect and communicate instances of radio jamming; improving efficiency on the field by 90%. \
                    Successfully pitched the business case at multiple field testing events and garnered extensive support from executives across the Air Force and Pentagon such as Air Combat Command A3J, 805th Test Squadron, and Special Warfare Directorate HQ to sponsor our company. Fostered business relationship with PhDs at Duke ECE Dept. \& Applied ML Lab to develop jamming classification ML algorithms. Delivered product requirements, built out simulation platform for data generation, and managed delivery + integration of model to meet Air Force requirements. \
                    Collaborated with defense prime Booz Allen Hamilton and led integration work between their Nexus backend platform and our frontend. Managed the partnership with Notch Inc, a leader in metamaterial solutions that enable antennas to be electronically controlled for beamforming, to build out our portable direction finding solution. Led the integration work with multiple mesh network companies (Gotenna, Somewear) to allow data collected on our edge platform to be collected across nodes for jammer localization and building a heatmap of the EW spectrum status.",
                show: false,
                explore: "https://www.instajam.one/"
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