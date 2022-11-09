export const schema = gql`
  type RekapData {
    id: Int!
    namaPerusahaan: String!
    alamat: String!
    tenagaKerjaDisabilitas: String!
    tenagaKerjaMuda: String!
    tenagaKerjaLansia: String!
    akad: String!
    akal: String!
    pmi: String!
    tka: String!
    tenagaKerjaPria: String!
    tenagaKerjaWanita: String!
    total: Int!
    keterangan: String!
  }

  type Query {
    rekapDatas: [RekapData!]! @requireAuth
    rekapData(id: Int!): RekapData @requireAuth
  }

  input CreateRekapDataInput {
    namaPerusahaan: String!
    alamat: String!
    tenagaKerjaDisabilitas: String!
    tenagaKerjaMuda: String!
    tenagaKerjaLansia: String!
    akad: String!
    akal: String!
    pmi: String!
    tka: String!
    tenagaKerjaPria: String!
    tenagaKerjaWanita: String!
    total: Int!
    keterangan: String!
  }

  input UpdateRekapDataInput {
    namaPerusahaan: String
    alamat: String
    tenagaKerjaDisabilitas: String
    tenagaKerjaMuda: String
    tenagaKerjaLansia: String
    akad: String
    akal: String
    pmi: String
    tka: String
    tenagaKerjaPria: String
    tenagaKerjaWanita: String
    total: Int
    keterangan: String
  }

  type Mutation {
    createRekapData(input: CreateRekapDataInput!): RekapData! @requireAuth
    updateRekapData(id: Int!, input: UpdateRekapDataInput!): RekapData!
      @requireAuth
    deleteRekapData(id: Int!): RekapData! @requireAuth
  }
`
