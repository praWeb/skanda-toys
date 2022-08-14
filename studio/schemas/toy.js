import ToyCondition from './utilities/toy_condition'
import ToyStatus from './utilities/toy_status'
import ToyAgeGroup from './utilities/toy_age_group'

export default {
  name: 'toy',
  title: 'Toy',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'condition',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: ToyCondition
      },
      validation: Rule => [
        Rule.required().min(1).error('Need to know the status of the toy'),
        Rule.max(1).error('Can have only one status')
      ]
    },
    {
      name: 'status',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: ToyStatus
      },
      validation: Rule => [
        Rule.required().max(1).error('Please set only one appropriate status')
      ]
    },
    {
      name: 'age_group',
      type: 'array',
      title: 'Age Group',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: ToyAgeGroup
      },
      validation: Rule => [
        Rule.required().max(1).error('Please select only one appropriate age group')
      ]
    },
    {
      name: 'popularity',
      title: 'Popularity',
      description: 'How popular is this toy with your child? (Rate 1 - 10)',
      type: 'number',
      validation: Rule => [
        Rule.required().greaterThan(1),
        Rule.lessThan(10).error('Can only have max 10 as the rating'),
        Rule.integer().error('Sorry rating has to be a integer')
      ]
    }
  ]
}