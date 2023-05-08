import prismaClient from "../../prisma";


interface OrderRequest {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id
      }, // não esquecer da vírgula
      data: {
        draft: false
      }
    })

    return order
  }
}

export { SendOrderService }