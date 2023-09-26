const posts = [
  {
    id: 1,
    title: 'Exemplo: Apanhador de castanha de caju',
    href: '#',
    description:
      'Estamos pagando uma diaria de 50,00 para apanha castanha de caju.',
    date: '23 de fevereiro, 2023',
    datetime: '23/09/2023',
    category: { title: 'Agricultura' },
    localization: 'Palmeira, Beberibe-CE',
    author: {
      name: 'Sitio',
      role: 'Responsável',
      whatsapp: '85982380314',
      imageUrl:
        'https://mambodelivery.vtexassets.com/arquivos/ids/160678/caju-bandeja-300g.jpg?v=637883146595800000',
    },
  },
]

export default function Jobs() {
  return (
    <div id="job" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vagas</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aqui você encontra diarias para trabalho.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <div className="text-gray-500">
                  {`código ${post.id}`}
                </div>
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </div>
              </div>


              <div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {/* <span className="absolute inset-0" /> */}
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                <p className="mt-5  text-sm leading-6 text-gray-600">{post.localization}</p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    {post.author.name}
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>

              <a href={`https://wa.me/55${post.author.whatsapp}`}
                className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Contato
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
