import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import workflow types
import workflowMetadata from './workflow/metadata'

// Import custom types
import post from './post'
//import animal from './animals'
import breeds from './breeds'
import colors from './colors'
import vets from './vets'
import release from './release'
import application from './application'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'demo-review-workflow',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    application,
    post,
    breeds,
    colors,
    vets,
    release,
    workflowMetadata
  ]),
})
