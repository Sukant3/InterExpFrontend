"use client"
import { useEffect, useState } from "react";
import {
  ThumbsUp,
  Eye,
  MessageSquare,
  Star,
  X,
  ChevronUp,
  ChevronDown,
  Briefcase,
  Calendar,
  DiffIcon,
  ChartSpline,
  CheckCircle,
  XCircle,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  BookOpen,
  ThumbsDown
} from "lucide-react";
import axios from "axios";

export default function InterviewLoopApp() {
  const [showForm, setShowForm] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState({});
  const [expandedRounds, setExpandedRounds] = useState({});
  const [expandedCards, setExpandedCards] = useState({});
  const [experiences, setExperiences] = useState([
    // {
    //   id: 1,
    //   userId: "user123",
    //   jobRole: "Full-Stack Developer",
    //   companyName: "InnovateTech",
    //   interviewDate: "2025-09-01",
    //   interviewLocation: "On-campus",
    //   resultStatus: "Selected",
    //   overallExperienceRating: 5,
    //   wouldRecommend: "Yes",
    //   preparationTimeWeeks: 8,
    //   totalInterviewDurationMinutes: 180,
    //   processDifficultyLevel: 5,
    //   rounds: [{
    //     roundName: "Technical Round",
    //     roundOrder: 1,
    //     durationMinutes: 60,
    //     interviewerCount: 1,
    //     difficultyLevel: 5,
    //     questions: {
    //       technicalQuestions: "React Hooks, asynchronous Node.js operations",
    //       codingProblems: "Database indexing via MongoDB",
    //       hrBehavioralQuestions: "",
    //       otherQuestions: "",
    //     },
    //     tips: {
    //       whatWentWell: "Strong problem-solving",
    //       areasForImprovement: "",
    //       adviceForCandidates: "Practice MongoDB",
    //       preparationResources: "LeetCode",
    //     },
    //   }],
    //   preInterviewDetails: {
    //     companyPresentationQuality: "Excellent",
    //     roleInformationClarity: "Very Clear",
    //     eligibilityCriteriaMet: "Yes",
    //   },
    //   interviewEnvironment: {
    //     interviewMode: "Hybrid",
    //     interviewerBehavior: "Professional",
    //     stressLevel: 5,
    //     breakTimeBetweenRounds: "15 min",
    //     unexpectedSituations: "None",
    //     joiningOfferProcess: "Quick",
    //   },
    //   preparationResources: {
    //     booksWebsites: ["LeetCode"],
    //     mockInterviewsTaken: true,
    //     peerStudyGroup: false,
    //     keyPreparationTips: "Focus on DSA",
    //     commonMistakesToAvoid: "",
    //     salaryDiscussion: "Yes",
    //     joiningDateNegotiation: "Yes",
    //   },
    //   detailedExperienceText: "Focused heavily on React Hooks, asynchronous Node.js operations, and database indexing via MongoDB.",
    //   isAnonymous: false,
    //   upvotes: 0,
    //   downvotes: 0,
    //   viewCount: 0,
    //   tags: ["Technical"],
    //   comments: [],
    // },
    // {
    //   id: 2,
    //   userId: "user456",
    //   jobRole: "Software Engineer Intern",
    //   companyName: "FutureSystems",
    //   interviewDate: "2025-08-01",
    //   interviewLocation: "Virtual",
    //   resultStatus: "Rejected",
    //   overallExperienceRating: 3,
    //   wouldRecommend: "Maybe",
    //   preparationTimeWeeks: 4,
    //   totalInterviewDurationMinutes: 90,
    //   processDifficultyLevel: 3,
    //   rounds: [{
    //     roundName: "Behavioral Round",
    //     roundOrder: 1,
    //     durationMinutes: 45,
    //     interviewerCount: 1,
    //     difficultyLevel: 3,
    //     questions: {
    //       technicalQuestions: "",
    //       codingProblems: "Light coding challenge on basic array manipulation",
    //       hrBehavioralQuestions: "Behavioral questions regarding teamwork",
    //       otherQuestions: "",
    //     },
    //     tips: {
    //       whatWentWell: "",
    //       areasForImprovement: "Behavioral responses",
    //       adviceForCandidates: "",
    //       preparationResources: "",
    //     },
    //   }],
    //   preInterviewDetails: {
    //     companyPresentationQuality: "Good",
    //     roleInformationClarity: "Clear",
    //     eligibilityCriteriaMet: "Yes",
    //   },
    //   interviewEnvironment: {
    //     interviewMode: "Video Call",
    //     interviewerBehavior: "Friendly",
    //     stressLevel: 4,
    //     breakTimeBetweenRounds: "No breaks",
    //     unexpectedSituations: "None",
    //     joiningOfferProcess: "N/A",
    //   },
    //   preparationResources: {
    //     booksWebsites: ["GeeksforGeeks"],
    //     mockInterviewsTaken: false,
    //     peerStudyGroup: true,
    //     keyPreparationTips: "",
    //     commonMistakesToAvoid: "",
    //     salaryDiscussion: "No",
    //     joiningDateNegotiation: "No",
    //   },
    //   detailedExperienceText: "Behavioral questions regarding teamwork and conflict resolution. Light coding challenge on basic array manipulation.",
    //   isAnonymous: false,
    //   upvotes: 0,
    //   downvotes: 0,
    //   viewCount: 0,
    //   tags: ["Behavioral"],
    //   comments: [],
    // }
  ]);
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:5000/intexps");
        setExperiences(response.data); // store response in state
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, []); // runs once on mount
  const [formData, setFormData] = useState({
    userId: "",
    jobRole: "",
    companyName: "",
    interviewDate: "",
    interviewLocation: "On-campus",
    resultStatus: "",
    overallExperienceRating: "",
    wouldRecommend: "",
    preparationTimeWeeks: "",
    totalInterviewDurationMinutes: "",
    processDifficultyLevel: "",
    rounds: [{
      roundName: "",
      roundOrder: "",
      durationMinutes: "",
      interviewerCount: "",
      difficultyLevel: "",
      questions: {
        technicalQuestions: "",
        codingProblems: "",
        hrBehavioralQuestions: "",
        otherQuestions: "",
      },
      tips: {
        whatWentWell: "",
        areasForImprovement: "",
        adviceForCandidates: "",
        preparationResources: "",
      },
    }],
    preInterviewDetails: {
      companyPresentationQuality: "",
      roleInformationClarity: "",
      eligibilityCriteriaMet: "",
    },
    interviewEnvironment: {
      interviewMode: "",
      interviewerBehavior: "",
      stressLevel: "",
      breakTimeBetweenRounds: "",
      unexpectedSituations: "",
      joiningOfferProcess: "",
    },
    preparationResources: {
      booksWebsites: [""],
      mockInterviewsTaken: false,
      peerStudyGroup: false,
      keyPreparationTips: "",
      commonMistakesToAvoid: "",
      salaryDiscussion: "",
      joiningDateNegotiation: "",
    },
    detailedExperienceText: "",
    isAnonymous: false,
    upvotes: 0,
    downvotes: 0,
    viewCount: 0,
    tags: [""],
    comments: [],
  });
  const MAX_LENGTH = 150;
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongText = experiences.length > MAX_LENGTH;
  const displaySummary = isExpanded || !isLongText
    ? experiences
    : `${experiences.substring(0, MAX_LENGTH)}...`;
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleRoundChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      rounds: prev.rounds.map((round, i) =>
        i === index ? { ...round, [field]: value } : round
      )
    }));
  };

  const handleRoundQuestionChange = (index, questionField, value) => {
    setFormData(prev => ({
      ...prev,
      rounds: prev.rounds.map((round, i) =>
        i === index ? {
          ...round,
          questions: { ...round.questions, [questionField]: value }
        } : round
      )
    }));
  };

  const handleRoundTipChange = (index, tipField, value) => {
    setFormData(prev => ({
      ...prev,
      rounds: prev.rounds.map((round, i) =>
        i === index ? {
          ...round,
          tips: { ...round.tips, [tipField]: value }
        } : round
      )
    }));
  };

  const addRound = () => {
    setFormData(prev => ({
      ...prev,
      rounds: [
        ...prev.rounds,
        {
          roundName: "",
          roundOrder: "",
          durationMinutes: "",
          interviewerCount: "",
          difficultyLevel: "",
          questions: {
            technicalQuestions: "",
            codingProblems: "",
            hrBehavioralQuestions: "",
            otherQuestions: "",
          },
          tips: {
            whatWentWell: "",
            areasForImprovement: "",
            adviceForCandidates: "",
            preparationResources: "",
          },
        },
      ],
    }));
  };

  const removeRound = (index) => {
    if (formData.rounds.length > 1) {
      setFormData(prev => ({
        ...prev,
        rounds: prev.rounds.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = () => {
    const newExperience = {
      ...formData,
      id: Date.now(),
      upvotes: 0,
      downvotes: 0,
      viewCount: 0,
      comments: []
    };

    setExperiences(prev => [newExperience, ...prev]);
    setShowForm(false);
    console.log(JSON.stringify(newExperience))
    axios.post('http://localhost:5000/Intexps',newExperience)

    setFormData({
      userId: "",
      jobRole: "",
      companyName: "",
      interviewDate: "",
      interviewLocation: "On-campus",
      resultStatus: "",
      overallExperienceRating: "",
      wouldRecommend: "",
      preparationTimeWeeks: "",
      totalInterviewDurationMinutes: "",
      processDifficultyLevel: "",
      rounds: [{
        roundName: "",
        roundOrder: "",
        durationMinutes: "",
        interviewerCount: "",
        difficultyLevel: "",
        questions: {
          technicalQuestions: "",
          codingProblems: "",
          hrBehavioralQuestions: "",
          otherQuestions: "",
        },
        tips: {
          whatWentWell: "",
          areasForImprovement: "",
          adviceForCandidates: "",
          preparationResources: "",
        },
      }],
      preInterviewDetails: {
        companyPresentationQuality: "",
        roleInformationClarity: "",
        eligibilityCriteriaMet: "",
      },
      interviewEnvironment: {
        interviewMode: "",
        interviewerBehavior: "",
        stressLevel: "",
        breakTimeBetweenRounds: "",
        unexpectedSituations: "",
        joiningOfferProcess: "",
      },
      preparationResources: {
        booksWebsites: [""],
        mockInterviewsTaken: false,
        peerStudyGroup: false,
        keyPreparationTips: "",
        commonMistakesToAvoid: "",
        salaryDiscussion: "",
        joiningDateNegotiation: "",
      },
      detailedExperienceText: "",
      isAnonymous: false,
      upvotes: 0,
      downvotes: 0,
      viewCount: 0,
      tags: [""],
      comments: [],
    });
  };

  const toggleCardExpansion = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const addComment = () => {
    setFormData(prev => ({
      ...prev,
      comments: [...prev.comments,
      {
        userId: "",
        commentText: "",
        parentCommentId: "",
        upvotes: 0,
        createdAt: new Date().toISOString(),
      },
      ],
    }));
  };
  const removeComment = (index) => {
    setFormData(prev => ({
      ...prev,
      comments: prev.comments.filter((_, i) => i !== index)
    }));
  };
  const toggleRound = (index) => {
    setExpandedRounds(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
          />
        ))}
      </div>
    );
  };



  return (
    <div id="HERO" className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Interview Loop</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Share Feedback
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Latest Experiences ({experiences.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {experiences.map((exp) => {
            const isExpanded = expandedCards[exp.id];

            return (
              <div
                key={exp.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6 ">
                  <div className="flex justify-between items-start mb-3 bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white rounded">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-white mb-1">
                        {exp.jobRole}
                      </h3>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.companyName || exp.interviewLocation}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(exp.interviewDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <span
                      className={`py-2 px-4 rounded-md text-sm font-semibold  ${exp.resultStatus === "Selected"
                        ? "bg-green-200 text-green-700 border-b-4 border-green-700  "
                        : exp.resultStatus === "Rejected"
                          ? "bg-red-100 text-red-700 border-b-4 border-red-700 "
                          : "bg-yellow-100 text-yellow-600 border-b-4 border-yellow-600 "
                        }`}
                    >
                      {exp.resultStatus}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">
                      <ChartSpline className="h-4 w-4 text-red-700"></ChartSpline>
                    </span>
                    <span className="font-semibold text-gray-700">Difficulty:</span>
                    <span className="font-bold text-red-500 gap-2">{exp.processDifficultyLevel}/5</span>
                    <span className="font-medium text-black flex">Rating:</span> {renderStars(exp.overallExperienceRating)}
                  </div>

                  <p className="text-gray-600 text-sm italic mb-4">
                    "{exp.detailedExperienceText}"
                  </p>

                  {isExpanded && (
                    <div className="mt-4 space-y-4 border-t pt-4">
                      {/* Overall Experience */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Overall Experience</h4>
                        <div className="space-y-1 text-sm text-black">
                          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            {exp.wouldRecommend === "Yes" ? (
                              <CheckCircle className="w-6 h-6 text-green-600" />
                            ) : exp.wouldRecommend === "No" ? (
                              <XCircle className="w-6 h-6 text-red-600" />
                            ) : (
                              <AlertCircle className="w-6 h-6 text-yellow-600" />
                            )}
                            <div>
                              <div className="font-semibold text-gray-800">Would Recommend: {exp.wouldRecommend}</div>
                              <div className="text-sm text-gray-600">Based on overall interview experience</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rounds */}
                      {exp.rounds && exp.rounds.length > 0 && (
                        <div>
                          <h2 className="text-md font-bold mb-4 flex items-center gap-2 text-black">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            Interview Rounds ({exp.rounds.length})
                          </h2>
                          <div className="space-y-3">
                            {exp.rounds.map((round, index) => (
                              <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                              >
                                <button
                                  onClick={() => toggleRound(index)}
                                  className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                                >
                                  <div className="flex items-center gap-3 text-left">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                      {round.roundOrder}
                                    </span>
                                    <div>
                                      <div className="font-semibold text-gray-800">{round.roundName}</div>
                                      <div className="text-sm text-gray-600">
                                        {round.durationMinutes} min • {round.interviewerCount} interviewer(s) • Difficulty: {round.difficultyLevel}/10
                                      </div>
                                    </div>
                                  </div>
                                  {expandedRounds[index] ? (
                                    <ChevronUp className="w-5 h-5 text-gray-600" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                  )}
                                </button>

                                {expandedRounds[index] && (
                                  <div className="p-4 space-y-4 bg-white">
                                    {/* Questions */}
                                    <div>
                                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Questions Asked:</h4>
                                      <div className="space-y-2 text-sm">
                                        {round.questions.technicalQuestions && (
                                          <div className="flex gap-2">
                                            <span className="text-blue-600 font-medium min-w-20">Technical:</span>
                                            <span className="text-gray-700">{round.questions.technicalQuestions}</span>
                                          </div>
                                        )}
                                        {round.questions.codingProblems && (
                                          <div className="flex gap-2">
                                            <span className="text-green-600 font-medium min-w-20">Coding:</span>
                                            <span className="text-gray-700">{round.questions.codingProblems}</span>
                                          </div>
                                        )}
                                        {round.questions.hrBehavioralQuestions && (
                                          <div className="flex gap-2">
                                            <span className="text-purple-600 font-medium min-w-20">HR/Behavioral:</span>
                                            <span className="text-gray-700">{round.questions.hrBehavioralQuestions}</span>
                                          </div>
                                        )}
                                        {round.questions.otherQuestions && (
                                          <div className="flex gap-2">
                                            <span className="text-orange-600 font-medium min-w-20">Other:</span>
                                            <span className="text-gray-700">{round.questions.otherQuestions}</span>
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    {/* Tips */}
                                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                                      <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                                        <Lightbulb className="w-4 h-4 text-amber-600" />
                                        Tips & Insights
                                      </h4>
                                      <div className="space-y-1 text-sm">
                                        {round.tips.whatWentWell && (
                                          <div className="flex gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span className="text-gray-700">{round.tips.whatWentWell}</span>
                                          </div>
                                        )}
                                        {round.tips.areasForImprovement && (
                                          <div className="flex gap-2">
                                            <span className="text-orange-600">⚡</span>
                                            <span className="text-gray-700">{round.tips.areasForImprovement}</span>
                                          </div>
                                        )}
                                        {round.tips.adviceForCandidates && (
                                          <div className="flex gap-2">
                                            <span className="text-blue-600">💡</span>
                                            <span className="text-gray-700">{round.tips.adviceForCandidates}</span>
                                          </div>
                                        )}
                                        {round.tips.preparationResources && (
                                          <div className="flex gap-2">
                                            <span className="text-purple-600">📚</span>
                                            <span className="text-gray-700">{round.tips.preparationResources}</span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pre-Interview Details */}
                      <div className="bg-blue-100 p-4 rounded-lg border border-purple-200">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Pre-Interview</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Presentation Quality:</span>
                            <span className="ml-2 text-gray-600"> {exp.preInterviewDetails.companyPresentationQuality}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Role Clarity:</span>
                            <span className="ml-2 text-gray-600">{exp.preInterviewDetails.roleInformationClarity}</span>
                          </div>
                        </div>
                      </div>



                      {/* Interview Environment */}
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Interview Environment</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Mode:</span>
                            <span className="ml-2 text-gray-600">{exp.interviewEnvironment.interviewMode}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Interviewer Behavior:</span>
                            <span className="ml-2 text-gray-600">{exp.interviewEnvironment.interviewerBehavior}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Stress Level:</span>
                            <span className="ml-2 text-gray-600">{exp.interviewEnvironment.stressLevel}/10</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Break Time:</span>
                            <span className="ml-2 text-gray-600">{exp.interviewEnvironment.breakTimeBetweenRounds}</span>
                          </div>
                          {exp.interviewEnvironment.unexpectedSituations && (
                            <div className="col-span-2">
                              <span className="font-medium text-gray-700">Unexpected:</span>
                              <span className="ml-2 text-gray-600">{exp.interviewEnvironment.unexpectedSituations}</span>
                            </div>
                          )}
                          {exp.interviewEnvironment.joiningOfferProcess && (
                            <div className="col-span-2">
                              <span className="font-medium text-gray-700">Offer Process:</span>
                              <span className="ml-2 text-gray-600">{exp.interviewEnvironment.joiningOfferProcess}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Preparation Resources */}
                      {exp.preparationResources.booksWebsites[0] && (
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h3 className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-green-600" />
                            Preparation Guide
                          </h3>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Resources Used:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {exp.preparationResources.booksWebsites.map((resource, i) => (
                                  <span key={i} className="px-3 py-1 bg-white rounded-full border border-green-300 text-gray-700">
                                    {resource}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div>
                                <span className="font-medium text-gray-700">Mock Interviews:</span>
                                <span className="ml-2 text-gray-600">{exp.preparationResources.mockInterviewsTaken ? "Yes" : "No"}</span>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Peer Study:</span>
                                <span className="ml-2 text-gray-600">{exp.preparationResources.peerStudyGroup ? "Yes" : "No"}</span>
                              </div>
                            </div>
                            {exp.preparationResources.keyPreparationTips && (
                              <div>
                                <span className="font-medium text-gray-700">Key Tips:</span>
                                <p className="mt-1 text-gray-600">{exp.preparationResources.keyPreparationTips}</p>
                              </div>
                            )}
                            {exp.preparationResources.commonMistakesToAvoid && (
                              <div>
                                <span className="font-medium text-gray-700">Mistakes to Avoid:</span>
                                <p className="mt-1 text-gray-600">{exp.preparationResources.commonMistakesToAvoid}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Detailed Experience */}
                      {exp.detailedExperienceText && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-gray-800">Detailed Experience</h3>
                          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                            {exp.detailedExperienceText}
                          </p>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                  

        {/* Footer - Engagement Stats */}
                  <div className="border-t bg-gray-50 p-4">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                          <ThumbsUp className="w-5 h-5" />
                          <span className="font-medium">{exp.upvotes}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                          <ThumbsDown className="w-5 h-5" />
                          <span className="font-medium">{exp.downvotes}</span>
                        </button>
                        <div className="flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          <span className="font-medium">{exp.viewCount}</span>
                        </div>
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                          <MessageSquare className="w-5 h-5" />
                          <span className="font-medium">{exp.comments.length}</span>
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        Posted by {exp.isAnonymous ? "Anonymous" : exp.userId}
                      </div>
                    </div>
                  </div>
  

  {/* Comments Section */}
        {/* {exp.comments.length > 0 && (
          <div className="border-t p-6 bg-white">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-black">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              Comments ({exp.comments.length})
            </h3>
            <div className="space-y-4">
              {exp.comments.slice(0, showAllComments ? exp.comments.length : 2).map((comment, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-800">{comment.userId}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{comment.commentText}</p>
                  <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{comment.upvotes}</span>
                  </button>
                </div>
              ))}
              {exp.comments.length > 2 && (
                <button
                  onClick={() => setShowAllComments(!showAllComments)}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  {showAllComments ? "Show Less" : `Show ${exp.comments.length - 2} More Comments`}
                </button>
              )}
            </div>
          </div>
        )} */}















































                </div>
                  )}

                <button
                  onClick={() => toggleCardExpansion(exp.id)}
                  className="mt-4 w-full py-2 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              </div>
        );
          })}
    </div>
      </main >

    {/* Full Form Modal */ }
  {
    showForm && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="min-h-screen flex items-start justify-center p-4 py-8">
          <div className="bg-black text-white rounded-2xl max-w-4xl w-full shadow-2xl">
            <div className="sticky top-0 bg-black border-b border-gray-700 p-6 flex justify-between items-center z-10 rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-cyan-300">Share Your Experience</h2>
                <p className="text-gray-400 text-sm">Enter your interview details below</p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Basic Details */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Basic Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    placeholder="User ID"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                  <input
                    type="text"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    placeholder="Job Role"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                  <input
                    type="date"
                    name="interviewDate"
                    value={formData.interviewDate}
                    onChange={handleChange}
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                  <select
                    name="interviewLocation"
                    value={formData.interviewLocation}
                    onChange={handleChange}
                    className="border rounded-lg p-2 bg-black text-white outline-none"
                  >
                    <option value="On-campus">On-campus</option>
                    <option value="Off-campus">Off-campus</option>
                    <option value="Virtual">Virtual</option>
                  </select>
                  <select
                    name="resultStatus"
                    value={formData.resultStatus}
                    onChange={handleChange}
                    className="border rounded-lg p-2 bg-black text-white outline-none"
                  >
                    <option value="">Select Result</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Waiting">Waiting</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </div>
              </section>

              {/* Results & Experience */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Results & Experience</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="number"
                    name="overallExperienceRating"
                    value={formData.overallExperienceRating}
                    onChange={handleChange}
                    placeholder="Rating (1-5)"
                    min="1"
                    max="5"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                  <select
                    name="wouldRecommend"
                    value={formData.wouldRecommend}
                    onChange={handleChange}
                    className="border rounded-lg p-2 bg-black text-white outline-none"
                  >
                    <option value="">Would Recommend?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                  <input
                    type="number"
                    name="processDifficultyLevel"
                    value={formData.processDifficultyLevel}
                    onChange={handleChange}
                    placeholder="Difficulty (1-10)"
                    min="1"
                    max="10"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="number"
                    name="preparationTimeWeeks"
                    value={formData.preparationTimeWeeks}
                    onChange={handleChange}
                    placeholder="Preparation Time (weeks)"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                  <input
                    type="number"
                    name="totalInterviewDurationMinutes"
                    value={formData.totalInterviewDurationMinutes}
                    onChange={handleChange}
                    placeholder="Total Duration (minutes)"
                    className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                  />
                </div>
              </section>

              {/* Interview Rounds */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Interview Rounds</h3>
                  <button
                    type="button"
                    onClick={addRound}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                  >
                    Add Round
                  </button>
                </div>
                {formData.rounds.map((round, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-4 mb-4 bg-gray-900">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium">Round {index + 1}</h4>
                      {formData.rounds.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRound(index)}
                          className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <select
                        value={round.roundName}
                        onChange={(e) => handleRoundChange(index, 'roundName', e.target.value)}
                        className="border p-2 rounded-lg w-full bg-black text-white outline-none"
                      >
                        <option value="">Select Round Type</option>
                        <option value="Online Assessment">Online Assessment</option>
                        <option value="Aptitude Test">Aptitude Test</option>
                        <option value="Technical Round">Technical Round</option>
                        <option value="HR Round">HR Round</option>
                      </select>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          value={round.roundOrder}
                          onChange={(e) => handleRoundChange(index, 'roundOrder', e.target.value)}
                          placeholder="Round Order"
                          className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                        />
                        <input
                          type="number"
                          value={round.durationMinutes}
                          onChange={(e) => handleRoundChange(index, 'durationMinutes', e.target.value)}
                          placeholder="Duration (min)"
                          className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                        />
                        <input
                          type="number"
                          value={round.interviewerCount}
                          onChange={(e) => handleRoundChange(index, 'interviewerCount', e.target.value)}
                          placeholder="Interviewer Count"
                          className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                        />
                        <input
                          type="number"
                          value={round.difficultyLevel}
                          onChange={(e) => handleRoundChange(index, 'difficultyLevel', e.target.value)}
                          placeholder="Difficulty (1-10)"
                          min="1"
                          max="10"
                          className="border rounded-lg p-2 bg-gray-800 text-white outline-none"
                        />
                      </div>
                      <h5 className="text-sm font-medium mt-3">Questions</h5>
                      <textarea
                        value={round.questions.technicalQuestions}
                        onChange={(e) => handleRoundQuestionChange(index, 'technicalQuestions', e.target.value)}
                        placeholder="Technical Questions"
                        className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                        rows="2"
                      />
                      <textarea
                        value={round.questions.codingProblems}
                        onChange={(e) => handleRoundQuestionChange(index, 'codingProblems', e.target.value)}
                        placeholder="Coding Problems"
                        className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                        rows="2"
                      />
                      <textarea
                        value={round.questions.hrBehavioralQuestions}
                        onChange={(e) => handleRoundQuestionChange(index, 'hrBehavioralQuestions', e.target.value)}
                        placeholder="HR/Behavioral Questions"
                        className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                        rows="2"
                      />
                      <h5 className="text-sm font-medium mt-3">Tips</h5>
                      <textarea
                        value={round.tips.whatWentWell}
                        onChange={(e) => handleRoundTipChange(index, 'whatWentWell', e.target.value)}
                        placeholder="What Went Well"
                        className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                        rows="2"
                      />
                      <textarea
                        value={round.tips.adviceForCandidates}
                        onChange={(e) => handleRoundTipChange(index, 'adviceForCandidates', e.target.value)}
                        placeholder="Advice For Candidates"
                        className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                        rows="2"
                      />
                    </div>
                  </div>
                ))}
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4">Pre-Interview Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <select
                    value={formData.preInterviewDetails.companyPresentationQuality}
                    onChange={(e) => handleNestedChange('preInterviewDetails', 'companyPresentationQuality', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Company Presentation Quality</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Poor">Poor</option>
                  </select>
                  <select
                    value={formData.preInterviewDetails.roleInformationClarity}
                    onChange={(e) => handleNestedChange('preInterviewDetails', 'roleInformationClarity', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Role Clarity</option>
                    <option value="Very Clear">Very Clear</option>
                    <option value="Somewhat Clear">Somewhat Clear</option>
                    <option value="Unclear">Unclear</option>
                  </select>
                  <select
                    value={formData.preInterviewDetails.eligibilityCriteriaMet}
                    onChange={(e) => handleNestedChange('preInterviewDetails', 'eligibilityCriteriaMet', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Eligibility</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Partially">Partially</option>
                  </select>
                </div>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4">Interview Environment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={formData.interviewEnvironment.interviewMode}
                    onChange={(e) => handleNestedChange('interviewEnvironment', 'interviewMode', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Interview Mode</option>
                    <option value="In-person">In-person</option>
                    <option value="Video Call">Video Call</option>
                    <option value="Phone">Phone</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                  <select
                    value={formData.interviewEnvironment.interviewerBehavior}
                    onChange={(e) => handleNestedChange('interviewEnvironment', 'interviewerBehavior', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Interviewer Behavior</option>
                    <option value="Very Friendly">Very Friendly</option>
                    <option value="Professional">Professional</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Intimidating">Intimidating</option>
                  </select>
                  <input
                    type="number"
                    value={formData.interviewEnvironment.stressLevel}
                    onChange={(e) => handleNestedChange('interviewEnvironment', 'stressLevel', e.target.value)}
                    placeholder="Stress Level (1-10)"
                    min="1"
                    max="10"
                    className="border rounded-lg p-2 bg-gray-800 text-white"
                  />
                  <select
                    value={formData.interviewEnvironment.breakTimeBetweenRounds}
                    onChange={(e) => handleNestedChange('interviewEnvironment', 'breakTimeBetweenRounds', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Break Time</option>
                    <option value="No breaks">No breaks</option>
                    <option value="15 min">15 min</option>
                    <option value="30 min">30 min</option>
                    <option value="1 hour">1 hour</option>
                    <option value="More than 1 hour">More than 1 hour</option>
                  </select>
                  <input
                    type="text"
                    value={formData.interviewEnvironment.unexpectedSituations}
                    onChange={(e) => handleNestedChange('interviewEnvironment', 'unexpectedSituations', e.target.value)}
                    placeholder="Unexpected Situations"
                    className="border rounded-lg p-2 col-span-2 bg-gray-800 text-white"
                  />
                  <input
                    type="text"
                    value={formData.interviewEnvironment.joiningOfferProcess}
                    onChange={(e) => handleNestedChange('interviewEnvironment', 'joiningOfferProcess', e.target.value)}
                    placeholder="Joining Offer Process"
                    className="border rounded-lg p-2 col-span-2 bg-gray-800 text-white"
                  />
                  <select
                    value={formData.preparationResources.salaryDiscussion}
                    onChange={(e) => handleNestedChange('preparationResources', 'salaryDiscussion', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Salary Discussion</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                  <select
                    value={formData.preparationResources.joiningDateNegotiation}
                    onChange={(e) => handleNestedChange('preparationResources', 'joiningDateNegotiation', e.target.value)}
                    className="border p-2 rounded-lg bg-black text-white"
                  >
                    <option value="">Joining Date Negotiation</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
              </section>
              {/* Preparation Resources */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Preparation Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.preparationResources.booksWebsites[0] || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      preparationResources: {
                        ...prev.preparationResources,
                        booksWebsites: [e.target.value],
                      },
                    }))}
                    placeholder="Books / Websites"
                    className="border rounded-lg p-2 bg-gray-800 text-white"
                  />
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.preparationResources.mockInterviewsTaken}
                      onChange={(e) => handleNestedChange('preparationResources', 'mockInterviewsTaken', e.target.checked)}
                    />
                    Mock Interviews Taken
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.preparationResources.peerStudyGroup}
                      onChange={(e) => handleNestedChange('preparationResources', 'peerStudyGroup', e.target.checked)}
                    />
                    Peer Study Group
                  </label>
                  <input
                    type="text"
                    value={formData.preparationResources.keyPreparationTips}
                    onChange={(e) => handleNestedChange('preparationResources', 'keyPreparationTips', e.target.value)}
                    placeholder="Key Preparation Tips"
                    className="border rounded-lg p-2 col-span-2 bg-gray-800 text-white"
                  />
                  <input
                    type="text"
                    value={formData.preparationResources.commonMistakesToAvoid}
                    onChange={(e) => handleNestedChange('preparationResources', 'commonMistakesToAvoid', e.target.value)}
                    placeholder="Common Mistakes to Avoid"
                    className="border rounded-lg p-2 col-span-2 bg-gray-800 text-white"
                  />

                </div>
              </section>


              {/* Detailed Experience */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Detailed Experience</h3>
                <textarea
                  name="detailedExperienceText"
                  value={formData.detailedExperienceText}
                  onChange={handleChange}
                  placeholder="Write your detailed experience..."
                  className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                  rows="4"
                />
              </section>

              {/* Community Features */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Community Features</h2>
                <label className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleChange}
                  />
                  Post as Anonymous
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <input
                    type="number"
                    name="upvotes"
                    value={formData.upvotes}
                    onChange={handleChange}
                    placeholder="Upvotes"
                    className="border rounded-lg p-2 bg-gray-800 text-white"
                  />
                  <input
                    type="number"
                    name="downvotes"
                    value={formData.downvotes}
                    onChange={handleChange}
                    placeholder="Downvotes"
                    className="border rounded-lg p-2 bg-gray-800 text-white"
                  />
                  <input
                    type="number"
                    name="viewCount"
                    value={formData.viewCount}
                    onChange={handleChange}
                    placeholder="View Count"
                    className="border rounded-lg p-2 bg-gray-800 text-white"
                  />
                </div>
                <input
                  type="text"
                  value={formData.tags.join(",")}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    tags: e.target.value.split(",").map(tag => tag.trim()),
                  }))}
                  placeholder="Tags (comma separated)"
                  className="border rounded-lg p-2 w-full bg-gray-800 text-white"
                />
              </section>

              {/* Comments */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Comments</h2>
                  <button
                    type="button"
                    onClick={addComment}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    Add Comment
                  </button>
                </div>
                <div className="space-y-4">
                  {formData.comments.map((comment, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-sm bg-gray-900">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-md font-medium">Comment {index + 1}</h3>
                        <button
                          type="button"
                          onClick={() => removeComment(index)}
                          className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                        >
                          Remove
                        </button>
                      </div>
                      <input
                        type="text"
                        name="userId"
                        value={comment.userId}
                        onChange={(e) => handleCommentChange(index, e)}
                        placeholder="User ID"
                        className="border rounded-lg p-2 mb-2 w-full bg-gray-800 text-white"
                      />
                      <textarea
                        name="commentText"
                        value={comment.commentText}
                        onChange={(e) => handleCommentChange(index, e)}
                        placeholder="Comment Text"
                        className="border rounded-lg p-2 mb-2 w-full bg-gray-800 text-white"
                        rows="3"
                      />
                      <input
                        type="text"
                        name="parentCommentId"
                        value={comment.parentCommentId}
                        onChange={(e) => handleCommentChange(index, e)}
                        placeholder="Parent Comment ID (optional)"
                        className="border rounded-lg p-2 mb-2 w-full bg-gray-800 text-white"
                      />
                      <input
                        type="number"
                        name="upvotes"
                        value={comment.upvotes}
                        onChange={(e) => handleCommentChange(index, e)}
                        placeholder="Upvotes"
                        className="border rounded-lg p-2 mb-2 w-full bg-gray-800 text-white"
                      />
                      <p className="text-xs text-gray-500">
                        Created At: {new Date(comment.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <input
                  type="text"
                  value={formData.tags.join(",")}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    tags: e.target.value.split(",").map(tag => tag.trim()),
                  }))}
                  placeholder="e.g., Technical, Behavioral"
                  className="border rounded-lg p-2 w-full bg-gray-800 text-white outline-none"
                />
              </section>

              {/* Submit Button */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
    </div >
  )
}