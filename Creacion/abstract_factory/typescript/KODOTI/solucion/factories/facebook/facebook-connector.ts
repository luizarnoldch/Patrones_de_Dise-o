import IConnector from "../connector.interface"

export default class FacebookConnector implements IConnector {
  open(): void {
    // Logic to make a valid connection to Facebook
  }

  close(): void {
    // Logic to close connection to Facebook
  }
}