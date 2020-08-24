export default {
    type: 'document',
    name: 'application',
    title: 'Application',
    fields: [
        {
            name: 'adopteeFirstName',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'adopteeLastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'adopteeAddress',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'adopteeCity',
            title: 'City',
            type: 'string'
        },
        {
            name: 'adopteeState',
            title: 'State',
            type: 'string'
        },
        {
            name: 'adopteeZip',
            title: 'Zip',
            type: 'number'
        },
        {
            name: 'adopteeEmail1',
            title: 'Email',
            type: 'email'
        },
        {
            name: 'adopteeEmail2',
            title: 'Alternative Email',
            type: 'string'
        },
        {
            name: 'adopteeCellPhone',
            title: 'Home or Mobile Phone',
            type: 'string'
        },
        {
            name: 'adopteeAlternatePhone',
            title: 'Alternate Phone',
            type: 'string'
        },
        {
            title: 'Type',
            name: 'rentOwn',
            type: 'string',
            options: {
              list: [
                {title: 'Yes', value: 'yesContactLandlord'},
                {title: 'No', value: 'NoContactLandlord'},
                {title: 'I own my home', value: 'own'}
              ], // <-- predefined values
              layout: 'radio', // <-- defaults to 'dropdown'
              direction: 'horizontal',
              validation: (Rule) => Rule.required().error('Required')
            }
        },
        {
            name: 'adopteeAges',
            title: 'Ages of all adults in the household',
            type: 'string'
        },
        {
            name: 'adopteeAgesChildren',
            title: 'Ages of all children in the household',
            type: 'string'
        },
        {
            title: 'Type of Pet Interested In',
            name: 'adopteeAnimalType',
            type: 'string',
            options: {
              list: [
                {title: 'Cat', value: 'cat'},
                {title: 'Dog', value: 'dog'}
              ], // <-- predefined values
              layout: 'radio', // <-- defaults to 'dropdown'
              direction: 'horizontal',
              validation: (Rule) => Rule.required().error('Name is required')
            }
          },
        {
            name: 'adopteeAnimalName',
            title: 'Name of Animal Interested In',
            type: 'reference',
            to: [{type: 'post'}]
        },
        {
            title: 'If this dog is adopted or otherwise becomes unavailable before your application is complete; would you like our adoption team to move forward with processing your application and assist you in selecting a different animal for adoption?',
            name: 'adopteeOtherAnimal',
            type: 'string',
            options: {
              list: [
                {title: 'Yes', value: 'yes'},
                {title: 'No', value: 'no'}
              ], // <-- predefined values
              layout: 'radio', // <-- defaults to 'dropdown'
              direction: 'horizontal',
              validation: (Rule) => Rule.required().error('Required')
            }
          },
          {
            title: 'Please share why you are interested in this specific animals:',
            name: 'adopteeReasons',
            type: 'text'
          },
          {
            title: 'Have you ever adopted from ARF Tulsa Before?',
            name: 'adopteeArfPrevious',
            type: 'string',
            options: {
              list: [
                {title: 'Yes', value: 'yes'},
                {title: 'No', value: 'no'}
              ], // <-- predefined values
              layout: 'radio', // <-- defaults to 'dropdown'
              direction: 'horizontal',
              validation: (Rule) => Rule.required().error('Required')
            }
          },
          {
            title: 'Have you ever relinquished an animal to a shelter, rescue or another individual?',
            name: 'adopteeRelinqushed',
            type: 'string',
            options: {
              list: [
                {title: 'Yes', value: 'yes'},
                {title: 'No', value: 'no'}
              ], // <-- predefined values
              layout: 'radio', // <-- defaults to 'dropdown'
              direction: 'horizontal',
              validation: (Rule) => Rule.required().error('Required')
            }
          },
          {
            title: 'If yes, please describe the circumstances:',
            name: 'adopteeRelinquishedReasons',
            type: 'text'
          }
    ]
  }
  