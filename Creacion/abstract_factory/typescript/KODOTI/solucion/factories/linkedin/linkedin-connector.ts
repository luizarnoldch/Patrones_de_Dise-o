import IConnector from "../connector.interface"

export default class LinkedinConnector implements IConnector {
  open(): void {
    // Logic to make a valid connection to Linkedin
  }

  close(): void {
    // Logic to close connection to Linkedin
  }
}