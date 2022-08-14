export default {
  name: 'person',
  type: 'document',
  title: 'Parent records',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Parent/Gaurdian name'
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email Address'
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password'
    }
  ]
}