import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";
import FacebookPublisher from "./facebook-publisher";
import FacebookConnector from "./facebook-connector";

export default class FacebookFactory implements IAbstractFactory {
  getConnector(): IConnector {
    return new FacebookConnector
  }
  
  getPublisher(connector: IConnector): IPublisher {
    return new FacebookPublisher(connector)
  }
}