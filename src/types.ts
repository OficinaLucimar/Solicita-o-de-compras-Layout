export interface PurchaseRequest {
  id: string;
  date: string;
  requestedBy: {
    name: string;
    initials: string;
  };
  classification: string;
  urgency: 'Low' | 'Medium' | 'High';
  status: 'Pendente' | 'Autorizado' | 'Concluído' | 'Urgente';
  amount?: string;
}

export interface RequestItem {
  sku: string;
  description: string;
  quantity: number;
  noRegistration: boolean;
}
