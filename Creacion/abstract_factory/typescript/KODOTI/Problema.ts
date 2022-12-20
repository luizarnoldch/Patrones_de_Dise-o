import IConnector from "./solucion/factories/connector.interface";
import FacebookConnector from "./solucion/factories/facebook/facebook-connector";
import FacebookPublisher from "./solucion/factories/facebook/facebook-publisher";
import LinkedinConnector from "./solucion/factories/linkedin/linkedin-connector";
import LinkedinPublisher from "./solucion/factories/linkedin/linkedin-publisher";
import IPublisher from "./solucion/factories/publisher.interface";
import SlackConnector from "./solucion/factories/slack/slack-connector";
import SlackPublisher from "./solucion/factories/slack/slack-publisher";

class PublisherFactory {
  getConnector(type: string): IConnector {
    if (type == 'FacebookConnector') {
      return new FacebookConnector();
    }

    if (type == 'LikedinConnector') {
      return new LinkedinConnector();
    }

    if (type == 'SlackConnector') {
      return new SlackConnector();
    }

    /**
     * Si aumenta las necesidades, tiene que aumentar el codigo
     * Viola la ley de Open-Close Principle (O) de SOLID
     */

    throw new Error('Invalid type: ' + type);
  }

  getPublisher(type: string, connector: IConnector): IPublisher {
    if (type == 'FacebookPublisher') {
      return new FacebookPublisher(connector);
    }

    if (type == 'LikedinPublisher') {
      return new LinkedinPublisher(connector);
    }

    if (type == 'SlackPublisher') {
      return new SlackPublisher(connector);
    }

    /**
     * Si aumenta las necesidades, tiene que aumentar el codigo
     * Viola la ley de Open-Close Principle (O) de SOLID
     */

    throw new Error('Invalid type: ' + type);
  }
  
}