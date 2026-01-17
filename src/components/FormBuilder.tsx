'use client';

import React, { useState } from 'react';
import { 
  Plus, Save, Eye, Trash2, GripVertical, Type, AlignLeft, 
  CheckSquare, ListChecked, Calendar, Upload, Hash, Mail,
  Phone, Link2, Star, ToggleLeft, Signature
} from 'lucide-react';

interface FormField {
  id: string;
  type: 'text' | 'textarea' | 'number' | 'email' | 'phone' | 'url' | 'date' | 'select' | 'multiselect' | 'checkbox' | 'radio' | 'file' | 'rating' | 'signature';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: string;
  helpText?: string;
}

interface FormBuilderProps {
  initialFields?: FormField[];
  onSave?: (fields: FormField[], settings: any) => void;
  templateName?: string;
  templateCategory?: string;
}

const fieldTypes = [
  { type: 'text', label: 'Short Text', icon: Type },
  { type: 'textarea', label: 'Long Text', icon: AlignLeft },
  { type: 'number', label: 'Number', icon: Hash },
  { type: 'email', label: 'Email', icon: Mail },
  { type: 'phone', label: 'Phone', icon: Phone },
  { type: 'url', label: 'URL', icon: Link2 },
  { type: 'date', label: 'Date', icon: Calendar },
  { type: 'select', label: 'Dropdown', icon: ListChecked },
  { type: 'multiselect', label: 'Multi-Select', icon: CheckSquare },
  { type: 'checkbox', label: 'Checkboxes', icon: CheckSquare },
  { type: 'radio', label: 'Radio Buttons', icon: ToggleLeft },
  { type: 'file', label: 'File Upload', icon: Upload },
  { type: 'rating', label: 'Star Rating', icon: Star },
  { type: 'signature', label: 'Signature', icon: Signature },
];

export default function FormBuilder({ initialFields = [], onSave, templateName = 'New Form', templateCategory = 'CUSTOM' }: FormBuilderProps) {
  const [fields, setFields] = useState<FormField[]>(initialFields);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [formName, setFormName] = useState(templateName);
  const [formDescription, setFormDescription] = useState('');
  const [category, setCategory] = useState(templateCategory);
  const [settings, setSettings] = useState({
    allowAnonymous: false,
    requireApproval: false,
    sendConfirmationEmail: true,
    notifyManagers: true,
    allowSaveDraft: true,
  });

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      id: `field-${Date.now()}`,
      type,
      label: `New ${type} field`,
      required: false,
      options: ['select', 'multiselect', 'checkbox', 'radio'].includes(type) ? ['Option 1', 'Option 2', 'Option 3'] : undefined,
    };
    setFields([...fields, newField]);
    setSelectedField(newField.id);
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const deleteField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
    if (selectedField === id) setSelectedField(null);
  };

  const moveField = (id: string, direction: 'up' | 'down') => {
    const index = fields.findIndex(f => f.id === id);
    if (index === -1) return;
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === fields.length - 1) return;

    const newFields = [...fields];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newFields[index], newFields[targetIndex]] = [newFields[targetIndex], newFields[index]];
    setFields(newFields);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(fields, { name: formName, description: formDescription, category, ...settings });
    }
    alert('Form template saved successfully!');
  };

  const selectedFieldData = fields.find(f => f.id === selectedField);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 mr-8">
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="text-4xl font-bold text-gray-800 mb-2 w-full border-none focus:outline-none focus:ring-2 focus:ring-purple-400 rounded px-2"
                placeholder="Form Name"
              />
              <textarea
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="text-lg text-gray-600 w-full border-none focus:outline-none focus:ring-2 focus:ring-purple-400 rounded px-2"
                placeholder="Form description..."
                rows={2}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                {previewMode ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Template
              </button>
            </div>
          </div>

          {/* Category & Settings */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
              >
                <option value="HR">HR</option>
                <option value="COMPLIANCE">Compliance</option>
                <option value="TRAINING">Training</option>
                <option value="INCIDENT">Incident</option>
                <option value="TIME_OFF">Time Off</option>
                <option value="PERFORMANCE">Performance</option>
                <option value="FEEDBACK">Feedback</option>
                <option value="SURVEY">Survey</option>
                <option value="CUSTOM">Custom</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={settings.allowAnonymous}
                  onChange={(e) => setSettings({ ...settings, allowAnonymous: e.target.checked })}
                  className="rounded"
                />
                Allow anonymous submissions
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={settings.requireApproval}
                  onChange={(e) => setSettings({ ...settings, requireApproval: e.target.checked })}
                  className="rounded"
                />
                Require manager approval
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={settings.sendConfirmationEmail}
                  onChange={(e) => setSettings({ ...settings, sendConfirmationEmail: e.target.checked })}
                  className="rounded"
                />
                Send confirmation email
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Field Types Palette */}
          {!previewMode && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Add Fields</h3>
              <div className="space-y-2">
                {fieldTypes.map(({ type, label, icon: Icon }) => (
                  <button
                    key={type}
                    onClick={() => addField(type as FormField['type'])}
                    className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-purple-50 rounded-lg flex items-center gap-3 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form Canvas */}
          <div className={`${previewMode ? 'col-span-4' : 'col-span-2'} bg-white rounded-xl shadow-lg p-8`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {previewMode ? 'Form Preview' : 'Form Builder'}
            </h3>
            
            {fields.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Type className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Add fields from the left panel to start building your form</p>
              </div>
            ) : (
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className={`border rounded-lg p-4 ${
                      selectedField === field.id && !previewMode
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white'
                    } ${previewMode ? '' : 'hover:border-purple-300 cursor-pointer'}`}
                    onClick={() => !previewMode && setSelectedField(field.id)}
                  >
                    <div className="flex items-start gap-3">
                      {!previewMode && (
                        <div className="flex flex-col gap-1 pt-1">
                          <button
                            onClick={(e) => { e.stopPropagation(); moveField(field.id, 'up'); }}
                            className="text-gray-400 hover:text-gray-600"
                            disabled={index === 0}
                          >
                            <GripVertical className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        {field.helpText && (
                          <p className="text-sm text-gray-500 mb-2">{field.helpText}</p>
                        )}
                        {renderFieldInput(field)}
                      </div>
                      {!previewMode && (
                        <button
                          onClick={(e) => { e.stopPropagation(); deleteField(field.id); }}
                          className="text-red-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {previewMode && fields.length > 0 && (
              <div className="mt-8">
                <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-lg hover:from-purple-700 hover:to-pink-700">
                  Submit Form
                </button>
              </div>
            )}
          </div>

          {/* Field Properties Panel */}
          {!previewMode && selectedFieldData && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Field Properties</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
                  <input
                    type="text"
                    value={selectedFieldData.label}
                    onChange={(e) => updateField(selectedField!, { label: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Placeholder</label>
                  <input
                    type="text"
                    value={selectedFieldData.placeholder || ''}
                    onChange={(e) => updateField(selectedField!, { placeholder: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Help Text</label>
                  <textarea
                    value={selectedFieldData.helpText || ''}
                    onChange={(e) => updateField(selectedField!, { helpText: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
                    rows={2}
                  />
                </div>

                {['select', 'multiselect', 'checkbox', 'radio'].includes(selectedFieldData.type) && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Options (one per line)</label>
                    <textarea
                      value={selectedFieldData.options?.join('\n') || ''}
                      onChange={(e) => updateField(selectedField!, { options: e.target.value.split('\n').filter(o => o.trim()) })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
                      rows={5}
                    />
                  </div>
                )}

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedFieldData.required}
                    onChange={(e) => updateField(selectedField!, { required: e.target.checked })}
                    className="rounded"
                  />
                  <span className="font-medium text-gray-700">Required field</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function renderFieldInput(field: FormField) {
  switch (field.type) {
    case 'text':
    case 'email':
    case 'phone':
    case 'url':
      return <input type={field.type} placeholder={field.placeholder} className="w-full px-3 py-2 border rounded-lg" />;
    case 'textarea':
      return <textarea placeholder={field.placeholder} className="w-full px-3 py-2 border rounded-lg" rows={3} />;
    case 'number':
      return <input type="number" placeholder={field.placeholder} className="w-full px-3 py-2 border rounded-lg" />;
    case 'date':
      return <input type="date" className="w-full px-3 py-2 border rounded-lg" />;
    case 'select':
      return (
        <select className="w-full px-3 py-2 border rounded-lg">
          <option>Select an option...</option>
          {field.options?.map(opt => <option key={opt}>{opt}</option>)}
        </select>
      );
    case 'multiselect':
      return (
        <select multiple className="w-full px-3 py-2 border rounded-lg" size={Math.min(field.options?.length || 3, 5)}>
          {field.options?.map(opt => <option key={opt}>{opt}</option>)}
        </select>
      );
    case 'checkbox':
    case 'radio':
      return (
        <div className="space-y-2">
          {field.options?.map(opt => (
            <label key={opt} className="flex items-center gap-2">
              <input type={field.type === 'checkbox' ? 'checkbox' : 'radio'} name={field.id} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      );
    case 'file':
      return <input type="file" className="w-full px-3 py-2 border rounded-lg" />;
    case 'rating':
      return (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <Star key={star} className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer" />
          ))}
        </div>
      );
    case 'signature':
      return (
        <div className="w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400">
          Click to sign
        </div>
      );
    default:
      return null;
  }
}
