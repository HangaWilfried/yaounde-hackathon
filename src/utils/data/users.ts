import type { UserDTO } from '@/utils/types'
import { Role } from '@/utils/types/enum'

export const users: UserDTO[] = [
  {
    id: "1b4e28ba-2fa1-11d2-883f-0016d3cca427",
    lastname: "Doe",
    firstname: "John",
    picture: "john_doe.jpg",
    role: Role.ADMIN,
    email: "john.doe@example.com",
  },
  {
    id: "b7fdd264-6d54-4e27-bb8e-3afdd55bc983",
    lastname: "Smith",
    firstname: "Jane",
    picture: "jane_smith.jpg",
    role: Role.USER,
    email: "jane.smith@example.com",
  },
  {
    id: "9d6a1a50-5d6d-4b23-8f85-70d2e736d17f",
    lastname: "Brown",
    firstname: "Charlie",
    picture: "charlie_brown.jpg",
    role: Role.VENDOR,
    email: "charlie.brown@example.com",
  },
  {
    id: "f2c54a27-bb3b-4b44-a160-6e6ddae6b1a7",
    lastname: "Wilson",
    firstname: "Anna",
    picture: "anna_wilson.jpg",
    role: Role.USER,
    email: "anna.wilson@example.com",
  },
  {
    id: "5d8d7c3e-9137-4d32-896f-b8e6eaf1972b",
    lastname: "Taylor",
    firstname: "Chris",
    picture: "chris_taylor.jpg",
    role: Role.ADMIN,
    email: "chris.taylor@example.com",
  },
];

