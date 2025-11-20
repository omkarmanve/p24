import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const taskInput = ref("");
    const tasks = ref([]);
    useRouter();
    const isEditing = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg" }, _attrs))}><div class="mb-4"><input type="text"${ssrRenderAttr("value", taskInput.value)} placeholder="Add task..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></div><div class="mb-4"><button class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">${ssrInterpolate(isEditing.value ? "Update Task" : "Add Task")}</button></div><ul><!--[-->`);
      ssrRenderList(tasks.value, (t) => {
        _push(`<li class="flex justify-between items-center bg-white px-4 py-2 rounded-md mb-2 shadow-sm"><span>${ssrInterpolate(t.title)}</span><div class="space-x-2"><button class="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"> Edit </button><button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"> Remove </button></div></li>`);
      });
      _push(`<!--]--></ul><button>home</button><div><button>about</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C2dLBjuH.mjs.map
