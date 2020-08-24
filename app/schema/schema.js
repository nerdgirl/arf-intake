// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


// Then import schema types from any plugins that might expose them
import animal from './animals'
import breeds from './breeds'
import colors from './colors'
import release from './release'
 

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'demo-review-workflow',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    animal,
    breeds,
    colors,
    workflowMetadata
  ]),
})
