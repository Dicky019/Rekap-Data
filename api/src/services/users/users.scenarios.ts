import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String9825450' } },
    two: { data: { email: 'String3137314' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
