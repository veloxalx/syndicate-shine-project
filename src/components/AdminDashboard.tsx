// AdminDashboard.jsx - Admin panel to view contact submissions
import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Mail, Phone } from "lucide-react";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Create a query against the contacts collection
    const q = query(collection(db, "contacts"), orderBy("timestamp", "desc"));

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const contactsData = [];
      querySnapshot.forEach((doc) => {
        contactsData.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate() || new Date(),
        });
      });

      setContacts(contactsData);
      setLoading(false);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const markAsRead = async (contactId) => {
    try {
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, {
        read: true,
      });
    } catch (error) {
      console.error("Error marking contact as read:", error);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Submissions Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-syndicate-blue"></div>
            </div>
          ) : contacts.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              No contact submissions yet.
            </p>
          ) : (
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-4 rounded-lg cursor-pointer border transition-all ${
                    selectedContact?.id === contact.id
                      ? "border-syndicate-blue bg-blue-50"
                      : "border-gray-200 hover:border-syndicate-blue/50"
                  } ${
                    !contact.read ? "border-l-4 border-l-syndicate-blue" : ""
                  }`}
                  onClick={() => {
                    setSelectedContact(contact);
                    if (!contact.read) {
                      markAsRead(contact.id);
                    }
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{contact.name}</h3>
                    <span className="text-xs text-gray-500">
                      {formatDate(contact.timestamp)}
                    </span>
                  </div>
                  
                  {(contact.email || contact.phone) && (
                    <div className="space-y-1 mb-2">
                      {contact.email && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-3 w-3 mr-1" />
                          <span>{contact.email}</span>
                        </div>
                      )}
                      {contact.phone && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-3 w-3 mr-1" />
                          <span>{contact.phone}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-sm font-medium truncate">
                    {contact.subject}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          {selectedContact ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Message Details</h2>
                <span className="text-sm text-gray-500">
                  {formatDate(selectedContact.timestamp)}
                </span>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Name
                    </label>
                    <p className="font-medium">{selectedContact.name}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Contact Information
                    </label>
                    {selectedContact.email && (
                      <div className="flex items-center font-medium mb-1">
                        <Mail className="h-4 w-4 mr-2 text-syndicate-blue" />
                        <span>{selectedContact.email}</span>
                      </div>
                    )}
                    {selectedContact.phone && (
                      <div className="flex items-center font-medium">
                        <Phone className="h-4 w-4 mr-2 text-syndicate-blue" />
                        <span>{selectedContact.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Subject
                  </label>
                  <p className="font-medium">{selectedContact.subject}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Message
                  </label>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 whitespace-pre-wrap">
                    {selectedContact.message}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {selectedContact.email && (
                  <button
                    className="px-4 py-2 bg-syndicate-blue text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() => {
                      window.location.href = `mailto:${selectedContact.email}?subject=RE: ${selectedContact.subject}`;
                    }}
                  >
                    Reply via Email
                  </button>
                )}
                {selectedContact.phone && (
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Call
                  </a>
                )}
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => setSelectedContact(null)}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-20">
              <svg
                className="w-16 h-16 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-500">
                Select a message to view details
              </h3>
              <p className="text-gray-400 mt-2">
                Click on any submission from the list
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;