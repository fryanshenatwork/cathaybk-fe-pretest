type TProfession = 'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics'

interface IUser {
  firstName: 'xxx',
  lastName: 'xxx',
  customerID: 'xxx',
  note?: 'xxx',
  profession: TProfession
}

function sortUserName(users: IUser[]) {
  return users.sort((a, b) => {
    const stringA = a.firstName + a.lastName + a.customerID
    const stringB = b.firstName + b.lastName + b.customerID

    return stringA.localeCompare(stringB)
  })
}

function sortByType(users: IUser[]) {
  const professionMap: {
    [k in TProfession]: number
  } = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5
  }

  return users.sort((a, b) => {
    return professionMap[a.profession] - professionMap[b.profession]
  })
}
