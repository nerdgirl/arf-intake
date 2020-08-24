export default {
  type: 'document',
  name: 'post',
  title: 'Animal Intake',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().error('Name is required')
    },
    {
      name: 'arfId',
      type: 'number',
      title: 'ID Number',
      validation: (Rule) => Rule.required().error('ID is required')
    },
    {
      title: 'Type',
      name: 'animalType',
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
      name: 'breed',
      type: 'reference',
      title: 'Breed',
      to: [
        {
          type: 'breeds'
        }
      ]
    },
    {
      name: 'colors',
      type: 'reference',
      title: 'Color',
      to: [
        {
          type: 'colors'
        }
      ]
    },
    {
      name: 'vets',
      type: 'reference',
      title: 'Vet',
      to: [{type: 'vets'}],
    },
    {
      name: 'intakeDate',
      type: 'date',
      title: 'Intake Date'
    },
    {
      name: 'birthDate',
      type: 'date',
      title: 'Date of Birth'
    },
    {
      name: 'weight',
      type: 'number',
      title: 'Weight',
    },
    {
      title: 'Gender',
      name: 'gender',
      type: 'string',
      options: {
        list: [
          {title: 'Male', value: 'male'},
          {title: 'Female', value: 'female'}
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
        direction: 'horizontal'
      }
    },
    {
      name: 'photo',
      title: 'Picture',
      type: 'image'
    },
    {
      name: 'adoptedDate',
      type: 'date',
      title: 'Adoption Date'
    },
    {type: 'datetime', name: 'publishedAt', title: 'Published at'},
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'publishedAt',
      media: 'image'
    }
  }
}