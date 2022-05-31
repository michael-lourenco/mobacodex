import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createSwaggerSpec } from 'next-swagger-doc'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const SwaggerUI = dynamic<{
  spec: any
}>(import('swagger-ui-react'), { ssr: false })

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: './src/pages/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Moba Codex API',
        description: 'Get data about Champions and Items of LoL with Moba Codex API',
        termsOfService: 'https://www.mobacodex.com/terms',
        contact:{
          name: 'Michael Lourenço',
          email: 'kontempler@gmail.com'
        },
        license:{
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
        },
        version: '0.0.1',
      },
      servers:[ 
        {
          url: 'https://www.mobacodex.com/',
          description: 'base for mobacodex api production'
        },  
        {
          url: 'http://localhost:3000/',
          description: 'base for mobacodex api local'
        }
      ],
    },
  })

  return {
    props: {
      spec,
    },
  }
}

export default ApiDoc
