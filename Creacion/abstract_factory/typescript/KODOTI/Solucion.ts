import Publisher from "./solucion/publisher";
import FacebookFactory from "./solucion/factories/facebook/facebook-factory";
import LinkedinFactory from "./solucion/factories/linkedin/linkedin-factory";
import SlackFactory from "./solucion/factories/slack/slack-factory";


const content = `
  Solo por hoy, cualquier curso a US$ 5.99

  http://kodoti.com/super-oferta
`

const publisher = new Publisher(content)

publisher.send(new FacebookFactory())
publisher.send(new LinkedinFactory())
publisher.send(new SlackFactory())