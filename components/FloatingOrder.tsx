import OrderButton from "./OrderButton";

// Always-visible order button. Sits above the phone's home bar.
export default function FloatingOrder() {
  return (
    <div className="fixed bottom-4 right-4 z-50 mb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      <OrderButton className="shadow-lg shadow-espresso/20">Order now</OrderButton>
    </div>
  );
}
