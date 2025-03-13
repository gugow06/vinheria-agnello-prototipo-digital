
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { ShoppingCart, CreditCard } from "lucide-react";
import { toast } from "sonner";

const Cart: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // In a real app, we would redirect to Stripe payment page
    toast.success("Redirecionando para página de pagamento...");
    setTimeout(() => {
      toast("Em um ambiente de produção, isso redirecionaria para o Stripe");
      // In a real implementation, we would:
      // window.location.href = stripeCheckoutUrl;
    }, 1500);
  };

  return (
    <div className="mobile-container">
      <Navbar />
      
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold mb-6">Carrinho de Compras</h1>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <ShoppingCart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-500 mb-6">Adicione alguns vinhos para começar</p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-wine-DEFAULT text-white rounded-md hover:bg-wine-dark transition-colors"
            >
              Explorar Vinhos
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">R${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Frete</span>
                <span className="font-medium">R$5,99</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-wine-DEFAULT">
                  R${(getTotalPrice() + 5.99).toFixed(2)}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleCheckout}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                <CreditCard size={18} />
                Finalizar Compra
              </button>
              
              <button
                onClick={clearCart}
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Limpar Carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
