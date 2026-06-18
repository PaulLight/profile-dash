export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}

export type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: T[] };

export interface User {
    id: string;
    name: string;
    username: string;
    avatarUrl: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
          lat: string,
          lng: string
        }
    }
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
}
