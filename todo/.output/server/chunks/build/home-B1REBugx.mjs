import { reactive, ref, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { F as FormKitLazyProvider, d as FormKit_default } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';

const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      last: "",
      userName: "",
      age: null,
      mobile: ""
    });
    const editingId = ref(null);
    const data = ref([]);
    let nextId = 1;
    function saveUser() {
      if (editingId.value !== null) {
        const index = data.value.findIndex((u) => u.id === editingId.value);
        if (index !== -1) {
          data.value[index] = { id: editingId.value, ...form };
        }
        editingId.value = null;
      } else {
        data.value.push({ id: nextId++, ...form });
      }
      form.name = "";
      form.last = "";
      form.userName = "";
      form.age = null;
      form.mobile = "";
    }
    function remove(id) {
      data.value = data.value.filter((user) => user.id !== id);
    }
    function editUser(user) {
      editingId.value = user.id;
      form.name = user.name;
      form.last = user.last;
      form.userName = user.userName;
      form.age = user.age;
      form.mobile = user.mobile;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center p-6" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FormKitLazyProvider), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center mt-10"${_scopeId}><div class="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FormKit_default), {
              type: "form",
              onSubmit: saveUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(FormKit_default), {
                    name: "name",
                    label: "Name",
                    type: "text",
                    modelValue: form.name,
                    "onUpdate:modelValue": ($event) => form.name = $event,
                    validation: "required",
                    placeholder: "First Name",
                    maxlength: "10",
                    class: "mb-4",
                    "input-class": "w-full p-2 border border-gray-300 rounded",
                    "label-class": "block mb-1 font-medium text-gray-700"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(FormKit_default), {
                    name: "last",
                    label: "Last Name",
                    type: "text",
                    modelValue: form.last,
                    "onUpdate:modelValue": ($event) => form.last = $event,
                    validation: "required",
                    placeholder: "Last Name",
                    maxlength: "10",
                    class: "mb-4",
                    "input-class": "w-full p-2 border border-gray-300 rounded",
                    "label-class": "block mb-1 font-medium text-gray-700"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(FormKit_default), {
                    name: "age",
                    label: "Age",
                    type: "number",
                    modelValue: form.age,
                    "onUpdate:modelValue": ($event) => form.age = $event,
                    validation: "required|integer|min:0|max:99",
                    placeholder: "Age",
                    class: "mb-4",
                    "input-class": "w-full p-2 border border-gray-300 rounded",
                    "label-class": "block mb-1 font-medium text-gray-700"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(FormKit_default), {
                    name: "mobile",
                    label: "Mobile No",
                    type: "text",
                    modelValue: form.mobile,
                    "onUpdate:modelValue": ($event) => form.mobile = $event,
                    validation: "required|length:10|integer",
                    placeholder: "Mobile No",
                    class: "mb-4",
                    "input-class": "w-full p-2 border border-gray-300 rounded",
                    "label-class": "block mb-1 font-medium text-gray-700"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(FormKit_default), {
                    type: "submit",
                    label: "Save User",
                    class: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(FormKit_default), {
                      name: "name",
                      label: "Name",
                      type: "text",
                      modelValue: form.name,
                      "onUpdate:modelValue": ($event) => form.name = $event,
                      validation: "required",
                      placeholder: "First Name",
                      maxlength: "10",
                      class: "mb-4",
                      "input-class": "w-full p-2 border border-gray-300 rounded",
                      "label-class": "block mb-1 font-medium text-gray-700"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(FormKit_default), {
                      name: "last",
                      label: "Last Name",
                      type: "text",
                      modelValue: form.last,
                      "onUpdate:modelValue": ($event) => form.last = $event,
                      validation: "required",
                      placeholder: "Last Name",
                      maxlength: "10",
                      class: "mb-4",
                      "input-class": "w-full p-2 border border-gray-300 rounded",
                      "label-class": "block mb-1 font-medium text-gray-700"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(FormKit_default), {
                      name: "age",
                      label: "Age",
                      type: "number",
                      modelValue: form.age,
                      "onUpdate:modelValue": ($event) => form.age = $event,
                      validation: "required|integer|min:0|max:99",
                      placeholder: "Age",
                      class: "mb-4",
                      "input-class": "w-full p-2 border border-gray-300 rounded",
                      "label-class": "block mb-1 font-medium text-gray-700"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(FormKit_default), {
                      name: "mobile",
                      label: "Mobile No",
                      type: "text",
                      modelValue: form.mobile,
                      "onUpdate:modelValue": ($event) => form.mobile = $event,
                      validation: "required|length:10|integer",
                      placeholder: "Mobile No",
                      class: "mb-4",
                      "input-class": "w-full p-2 border border-gray-300 rounded",
                      "label-class": "block mb-1 font-medium text-gray-700"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(FormKit_default), {
                      type: "submit",
                      label: "Save User",
                      class: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="w-full max-w-2xl mt-6"${_scopeId}><h2 class="text-xl font-bold mb-4"${_scopeId}>Users:</h2><ul${_scopeId}><!--[-->`);
            ssrRenderList(data.value, (user) => {
              _push2(`<li class="flex justify-between items-center bg-white p-4 mb-3 rounded shadow"${_scopeId}><div${_scopeId}> ID: ${ssrInterpolate(user.id)} - ${ssrInterpolate(user.name)} ${ssrInterpolate(user.last)} (${ssrInterpolate(user.userName)}) - Age: ${ssrInterpolate(user.age)}, Mobile: ${ssrInterpolate(user.mobile)}</div><div class="flex space-x-2"${_scopeId}><button class="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"${_scopeId}> Update </button><button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"${_scopeId}> Remove </button></div></li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center mt-10" }, [
                createVNode("div", { class: "w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md" }, [
                  createVNode(unref(FormKit_default), {
                    type: "form",
                    onSubmit: saveUser
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormKit_default), {
                        name: "name",
                        label: "Name",
                        type: "text",
                        modelValue: form.name,
                        "onUpdate:modelValue": ($event) => form.name = $event,
                        validation: "required",
                        placeholder: "First Name",
                        maxlength: "10",
                        class: "mb-4",
                        "input-class": "w-full p-2 border border-gray-300 rounded",
                        "label-class": "block mb-1 font-medium text-gray-700"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(FormKit_default), {
                        name: "last",
                        label: "Last Name",
                        type: "text",
                        modelValue: form.last,
                        "onUpdate:modelValue": ($event) => form.last = $event,
                        validation: "required",
                        placeholder: "Last Name",
                        maxlength: "10",
                        class: "mb-4",
                        "input-class": "w-full p-2 border border-gray-300 rounded",
                        "label-class": "block mb-1 font-medium text-gray-700"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(FormKit_default), {
                        name: "age",
                        label: "Age",
                        type: "number",
                        modelValue: form.age,
                        "onUpdate:modelValue": ($event) => form.age = $event,
                        validation: "required|integer|min:0|max:99",
                        placeholder: "Age",
                        class: "mb-4",
                        "input-class": "w-full p-2 border border-gray-300 rounded",
                        "label-class": "block mb-1 font-medium text-gray-700"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(FormKit_default), {
                        name: "mobile",
                        label: "Mobile No",
                        type: "text",
                        modelValue: form.mobile,
                        "onUpdate:modelValue": ($event) => form.mobile = $event,
                        validation: "required|length:10|integer",
                        placeholder: "Mobile No",
                        class: "mb-4",
                        "input-class": "w-full p-2 border border-gray-300 rounded",
                        "label-class": "block mb-1 font-medium text-gray-700"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(FormKit_default), {
                        type: "submit",
                        label: "Save User",
                        class: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "w-full max-w-2xl mt-6" }, [
                createVNode("h2", { class: "text-xl font-bold mb-4" }, "Users:"),
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(data.value, (user) => {
                    return openBlock(), createBlock("li", {
                      key: user.id,
                      class: "flex justify-between items-center bg-white p-4 mb-3 rounded shadow"
                    }, [
                      createVNode("div", null, " ID: " + toDisplayString(user.id) + " - " + toDisplayString(user.name) + " " + toDisplayString(user.last) + " (" + toDisplayString(user.userName) + ") - Age: " + toDisplayString(user.age) + ", Mobile: " + toDisplayString(user.mobile), 1),
                      createVNode("div", { class: "flex space-x-2" }, [
                        createVNode("button", {
                          onClick: ($event) => editUser(user),
                          class: "bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                        }, " Update ", 8, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => remove(user.id),
                          class: "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        }, " Remove ", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-B1REBugx.mjs.map
