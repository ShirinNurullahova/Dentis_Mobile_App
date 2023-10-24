type Status = "waiting" | "success" | "rejected";
  interface Client {
    id: number;
    name: string;
    number: string;
    title: string;
    status: Status;  }
  
  export const clientData: Client[] = [
    {
      id: 1,
      name: 'Leyla Əlizadə',
      number: '(+994 55 823 62 02)',
      title: 'Gözləmədə',
      status: "waiting"
    },
    {
      id: 2,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Uğurlu əməliyyat',
      status:"success" as any
    },
    {
      id: 3,
      name: 'Əli Ağayev',
      number: '(+994 55 823 62 02)',
      title: 'Ləğv edilmiş',
      status:"rejected" as any
    },
    {
      id: 4,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Gözləmədə',
      status:"waiting" as any
    },
    {
      id: 5,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Ləğv edilmiş',
      status:"rejected" as any
    },
    {
      id: 6,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Uğurlu əməliyyat',
      status:"success" as any
    },
    {
      id: 7,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Gözləmədə',
      status:"waiting" as any
    },
    {
      id: 8,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Uğurlu əməliyyat',
      status:"success" as any
    },
    {
      id: 9,
      name: 'Emin Muradov',
      number: '(+994 55 823 62 02)',
      title: 'Ləğv edilmiş',
      status:"rejected" as any
    },
  ];
  