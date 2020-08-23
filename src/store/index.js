import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        faqList: [
            { id: 1, guid: '1', categoryId: 1, quesion: 'What is The Puf Box?', answer: 'The Puf Box, unlike its name, is for dogs lovers (at heart and loyalty wise) and for dog nation enthusiasts (yes, we are signing the petition soon). It is a monthly subscription box that aims to be a one-stop solution for all your doggo care needs. It has an assortment of food, treats, grooming products, toys, accessories and much more that has been carefully selected to meet the Breed-Age-Preference requirements of your furry friend.' },
            { id: 2, guid: '2', categoryId: 1, quesion: 'What do you get in The Puf Box?', answer: 'Well, everything that can get your dog their first date with that proud Pomeranian who would just not give a damn about them otherwise. The Dog Box hosts pet care products like softening shampoos, fragrant colognes, mlem inducing treats, moisturising paw butters, and tail-chasing toys among a variety of products that are sure to delight your pet.So, go ahead and choose from our range of 3 wonderfully curated boxes of unconditional pet care.P.S First impression is important, guys!' },
            { id: 3, guid: '3', categoryId: 1, quesion: 'What are the types of boxes that you offer?', answer: 'We offer 3 types of boxes; The Shiny Silver Wag-On, The Bold Gold Wag-On, and The Plucky Platinum Wag-On. Thereby, giving you the power to choose how you wish to pamper your furry babies! Each of these boxes has been carefully curated for your furry friends. It can also be customised as per their personas!The Dog Box only gives you what you need for your pup. There is a box catering to every woof under any roof! Did that rhyme scheme land properly? Well, even if that didn’t, we are sure, our boxes will land at your doorsteps properly and on time!' },
            { id: 4, guid: '4', categoryId: 1, quesion: 'How do I claim my referral?', answer: 'Once you have referred someone please get in touch with our team by emailing us at info@thedogbox.in or whatsapp us at +919513918181 with the details of your referee within 5 days of their purchase.' },
            { id: 5, guid: '5', categoryId: 1, quesion: 'How does your referral programme work?', answer: 'What if we told you that you could share your dog box experience with others and get rewarded for it! Currently, if you refer any new customer to us, your friend and you both get a 15% discount on your next billing cycle respectively (Max discount is upto 15% of the bill value of your referral).' },
            { id: 6, guid: '6', categoryId: 1, quesion: 'Is The Dog Box hiring?', answer: 'We are always on the lookout for fresh new talent. If you feel you fit into our culture please email us your resume/cv to info@thedogbox.in along with the position that you feel you are best suited for.' },
            { id: 7, guid: '7', categoryId: 1, quesion: 'Want to partner with us?', answer: 'To partner with us or onboard your brands products onto our platform, please write an email to info@thedogbox.in and attach your brand details, social media handles, product catalogue and any other information that you might seem fit.' }
        ]
    },
    getters: {
        allFaqList: (state) => state.faqList
    },
    mutations: {},
    actions: {}

})