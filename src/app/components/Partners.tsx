import { CheckIcon } from '@heroicons/react/20/solid'

const informationsPartners = [
  {
    id: 1,
    name: 'Sitio Matheus',
    description: 'Somos produtores de caju a mais de 20 anos, temos produtos de alta qualidade. Estamos a disposição para negociações.',
    products: [
      { id: 1, name_product: 'Castanha em natura' },
      { id: 2, name_product: 'Caju de mesa' },
      { id: 3, name_product: 'Caju para polpa' },
      { id: 4, name_product: 'Galinha caipira' },
    ],
    whatsapp: '85982380314',
    partnerImage: '/images/caju.jpeg',
  },
  {
    id: 2,
    name: 'Sitio Ducaju',
    description: 'Somos produtores de caju a mais de 30 anos, temos produtos de alta qualidade. Estamos a disposição para negociações.',
    products: [
      { id: 1, name_product: 'Castanha em natura' },
      { id: 2, name_product: 'Caju de mesa' },
      { id: 3, name_product: 'Caju para polpa' },
      { id: 4, name_product: 'Galinha caipira' },
    ],
    whatsapp: '85982380314',
    partnerImage: '/images/caju.jpeg',
  }
];

export default function Partners() {
  return (
    <div id='partner' className="bg-white py-0 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Parceiros do agro</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Aqui você encontra vários produtores da região, vem negociar produto bom com preço justo.
          </p>
        </div>

        {informationsPartners.map((information) => (
          <div key={information.id} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{information.name}</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {information.description}
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">O que temos</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {information.products.map((feature) => (
                  <li key={feature.id} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name_product}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <img src="./images/caju.jpeg" alt="" className="w-full" />
                  <a
                    href={`https://wa.me/55${information.whatsapp}`}
                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    whatsapp
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    precisando de ajuda, entre em contato através do divulgador (85) 98238-0314, da empresa Ytalo Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
