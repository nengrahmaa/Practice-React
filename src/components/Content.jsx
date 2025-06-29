import { Heart, ShoppingCart, Info, MessageCircle } from "lucide-react";

export default function Content({ products, onToggleLike, onToggleCart }) {
    return (
        <section className="px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">PRODUK TERBARU</h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        {/* Image section */}
                        {/* <div className="h-44 overflow-hidden"> */}
                        <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="h-full object-contain transition-transform duration-500 group-hover:scale-115"
                            />
                            {/* </div> */}
                            <button
                                onClick={() => onToggleLike(p.id)}
                                className={`absolute top-3 right-3 rounded-full p-2 text-white shadow-md ${p.liked
                                    ? "bg-[#e60012]"
                                    : "bg-black/40 hover:bg-black/60"
                                    }`}
                            >
                                <Heart
                                    className="w-5 h-5"
                                    fill={p.liked ? "currentColor" : "none"}
                                />
                            </button>
                        </div>

                        {/* Details */}
                        < div className="p-4 space-y-2" >
                            <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                                {p.name}
                            </h3>

                            <p className="text-[#e60012] font-bold text-lg">
                                Rp{Number(p.price).toLocaleString("id-ID")}
                            </p>

                            <div className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4 rounded-full border-amber-50"
                                    style={{ backgroundColor: p.color.toLowerCase() }}
                                ></div>
                                <span className="text-sm text-gray-600 capitalize">
                                    {p.color}
                                </span>
                            </div>

                            {/* Buttons */}
                            < div className="mt-3 flex items-center justify-between" >
                                <button className="bg-black/60 hover:bg-[#e60012] text-white p-2 rounded-full">
                                    <Info className="w-5 h-5" />
                                </button>
                                <button className="bg-black/60 hover:bg-[#e60012] text-white p-2 rounded-full">
                                    <MessageCircle className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => onToggleCart(p.id)}
                                    className="bg-gradient-to-r from-[#e60012] to-rose-600 px-4 py-2 text-sm font-semibold text-white rounded-full ml-auto"
                                >
                                    Tambah
                                </button>
                            </div>
                        </div>
                    </div >
                ))
                }
            </div >
        </section >
    );
}
