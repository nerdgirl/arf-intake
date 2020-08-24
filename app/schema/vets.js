export default {
    name: 'vets',
    type: 'document',
    title: 'Vets',
    fields: [
      {
        name: 'vetName',
        title: 'Name of Vet',
        type: 'string'
      },
      {
        name: 'vetAddress',
        title: 'Address of Vet',
        type: 'string'
      },
      {
        name: 'vetPhone',
        title: 'Phone Number',
        type: 'string'
      },
      {
        name: 'vetFax',
        title: 'Fax Number',
        type: 'string'
      },
      {
        name: 'vetEmail',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'vetWebsite',
        title: 'Website',
        type: 'url'
      },
      {
        name: 'vetContact',
        title: 'Contact Name',
        type: 'string'
      },
    ]
}