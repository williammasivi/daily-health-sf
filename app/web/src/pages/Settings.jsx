import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-white text flex justify-center items-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Paramètres</h2>
        <form className="space-y-6">
          {/* Account Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Informations du compte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Nom d'utilisateur</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-600 rounded-md focus:ring focus:ring-indigo-500"
                  placeholder="Nom d'utilisateur"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-600 rounded-md focus:ring focus:ring-indigo-500"
                  placeholder="Adresse email"
                />
              </div>
            </div>
          </div>

          {/* Password Settings */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sécurité</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Mot de passe actuel</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-600 rounded-md focus:ring focus:ring-indigo-500"
                  placeholder="Mot de passe actuel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Nouveau mot de passe</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-600 rounded-md focus:ring focus:ring-indigo-500"
                  placeholder="Nouveau mot de passe"
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Notifications</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm font-medium">Recevoir des notifications par email</label>
            </div>
          </div>

          {/* Save Settings */}
          <div className="pt-5">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
