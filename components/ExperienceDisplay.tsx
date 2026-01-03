"use client"
import { useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Eye,
  MessageSquare,
  Star,
  Briefcase,
  Calendar,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  BookOpen,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// The core component remains largely the same, but is wrapped in a full, runnable file.
export default function ExperienceDisplay() {
  // State to track which interview rounds are expanded (indexed by round in the array)
  const [expandedRounds, setExpandedRounds] = useState({});
  // State to control the visibility of all comments
  const [showAllComments, setShowAllComments] = useState(false);

  // Sample data - this would typically be passed as a prop
  const feedback = {
    userId: "user123",
    jobRole: "Software Engineer",
    companyName: "Csociety",
    interviewDate: "2025-07-1",
    interviewLocation: "Off-campus",
    resultStatus: "Selected",
    overallExperienceRating: 4,
    wouldRecommend: "Yes",
    preparationTimeWeeks: 8,
    totalInterviewDurationMinutes: 180,
    processDifficultyLevel: 7,
    rounds: [
      {
        roundName: "Online Assessment",
        roundOrder: 1,
        durationMinutes: 60,
        interviewerCount: 0,
        difficultyLevel: 6,
        questions: {
          technicalQuestions: "",
          codingProblems: "Two medium-level DSA problems on arrays and dynamic programming",
          hrBehavioralQuestions: "",
          otherQuestions: "",
        },
        tips: {
          whatWentWell: "Completed both problems with optimal solutions",
          areasForImprovement: "Could have been faster in debugging",
          adviceForCandidates: "Practice similar problems on LeetCode",
          preparationResources: "LeetCode Premium, Striver's SDE Sheet",
        },
      },
      {
        roundName: "Technical Round 1",
        roundOrder: 2,
        durationMinutes: 60,
        interviewerCount: 1,
        difficultyLevel: 8,
        questions: {
          technicalQuestions: "System design basics, DBMS normalization, OOP concepts",
          codingProblems: "Live coding on binary trees",
          hrBehavioralQuestions: "",
          otherQuestions: "Questions about previous projects",
        },
        tips: {
          whatWentWell: "Strong explanation of system design concepts",
          areasForImprovement: "Needed hints for the coding problem",
          adviceForCandidates: "Be thorough with data structures",
          preparationResources: "GeeksforGeeks, System Design Primer",
        },
      },
    ],
    preInterviewDetails: {
      companyPresentationQuality: "Excellent",
      roleInformationClarity: "Very Clear",
      eligibilityCriteriaMet: "Yes",
    },
    interviewEnvironment: {
      interviewMode: "Hybrid",
      interviewerBehavior: "Professional",
      stressLevel: 6,
      breakTimeBetweenRounds: "15 min",
      unexpectedSituations: "None",
      joiningOfferProcess: "Offer received within 2 weeks",
    },
    preparationResources: {
      booksWebsites: ["LeetCode", "GeeksforGeeks", "InterviewBit"],
      mockInterviewsTaken: true,
      peerStudyGroup: true,
      keyPreparationTips: "Focus on DSA fundamentals and practice consistently",
      commonMistakesToAvoid: "Don't skip system design preparation",
      salaryDiscussion: "Yes",
      joiningDateNegotiation: "Yes",
    },
    detailedExperienceText: "Overall, the interview process was well-structured and professional. The interviewers were friendly and gave helpful hints when I got stuck. The company culture seemed great based on my interactions.",
    isAnonymous: false,
    upvotes: 45,
    downvotes: 3,
    viewCount: 1250,
    tags: ["Software Engineer", "On-campus", "DSA", "System Design"],
    comments: [
      { userId: "user456", commentText: "Thanks for sharing! This is really helpful.", parentCommentId: "", upvotes: 5, createdAt: "2024-09-20T10:30:00Z" },
      { userId: "user789", commentText: "What was the salary range offered?", parentCommentId: "", upvotes: 12, createdAt: "2024-09-21T14:20:00Z" },
      { userId: "user101", commentText: "Did they ask about your projects in detail?", parentCommentId: "", upvotes: 8, createdAt: "2024-09-22T09:15:00Z" },
      { userId: "user202", commentText: "Great insights! How many rounds were there in total?", parentCommentId: "", upvotes: 3, createdAt: "2024-09-23T16:45:00Z" },
    ],
  };

  // Function to toggle the expanded state of an individual round by its index
  const toggleRound = (index) => {
    setExpandedRounds(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Helper function to render star icons based on rating
  const renderStars = (rating) => {
    // Ensure rating is treated as a number
    const numRating = Number(rating);
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${star <= numRating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen rounded-2xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{feedback.jobRole}</h1>
              <div className="flex items-center gap-4 text-sm opacity-90 flex-wrap">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {feedback.companyName || feedback.interviewLocation}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(feedback.interviewDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                className={`px-4 py-2 rounded-full font-semibold text-sm ${feedback.resultStatus === "Selected"
                    ? "bg-green-500"
                    : feedback.resultStatus === "Rejected"
                      ? "bg-red-500"
                      : feedback.resultStatus === "Waiting"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                  }`}
              >
                {feedback.resultStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-gray-50 border-b">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{feedback.overallExperienceRating}</div>
            <div className="text-xs text-gray-600 mt-1">Rating</div>
            {renderStars(feedback.overallExperienceRating)}
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{feedback.processDifficultyLevel}/10</div>
            <div className="text-xs text-gray-600 mt-1">Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{feedback.preparationTimeWeeks}</div>
            <div className="text-xs text-gray-600 mt-1">Weeks Prep</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{feedback.totalInterviewDurationMinutes}</div>
            <div className="text-xs text-gray-600 mt-1">Minutes Total</div>

          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Recommendation */}
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            {feedback.wouldRecommend === "Yes" ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : feedback.wouldRecommend === "No" ? (
              <XCircle className="w-6 h-6 text-red-600" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            )}
            <div>
              <div className="font-semibold text-gray-800">Would Recommend: {feedback.wouldRecommend}</div>
              <div className="text-sm text-gray-600">Based on overall interview experience</div>
            </div>
          </div>

          {/* Interview Rounds */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Interview Rounds ({feedback.rounds.length})
            </h2>
            <div className="space-y-3">
              {feedback.rounds.map((round, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    // Correct logic to toggle a specific round's expansion state
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
                    {/* Chevron icon changes based on expansion state */}
                    {expandedRounds[index] ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {/* Detailed Round Content - conditionally rendered */}
                  {expandedRounds[index] && (
                    <div className="p-4 space-y-4 bg-white border-t">
                      {/* Questions */}
                      <div>
                        <h4 className="font-semibold text-base text-gray-800 mb-2">Questions Asked:</h4>
                        <div className="space-y-2 text-sm">
                          {round.questions.technicalQuestions && (
                            <div className="flex gap-2">
                              <span className="text-blue-600 font-medium min-w-24">Technical:</span>
                              <span className="text-gray-700">{round.questions.technicalQuestions}</span>
                            </div>
                          )}
                          {round.questions.codingProblems && (
                            <div className="flex gap-2">
                              <span className="text-green-600 font-medium min-w-24">Coding:</span>
                              <span className="text-gray-700">{round.questions.codingProblems}</span>
                            </div>
                          )}
                          {round.questions.hrBehavioralQuestions && (
                            <div className="flex gap-2">
                              <span className="text-purple-600 font-medium min-w-24">HR/Behavioral:</span>
                              <span className="text-gray-700">{round.questions.hrBehavioralQuestions}</span>
                            </div>
                          )}
                          {round.questions.otherQuestions && (
                            <div className="flex gap-2">
                              <span className="text-orange-600 font-medium min-w-24">Other:</span>
                              <span className="text-gray-700">{round.questions.otherQuestions}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Tips */}
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <h4 className="font-semibold text-base text-gray-800 mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-600" />
                          Tips & Insights
                        </h4>
                        <div className="space-y-1 text-sm">
                          {round.tips.whatWentWell && (
                            <div className="flex gap-2">
                              <span className="text-green-600">✓</span>
                              <span className="text-gray-700">**Went Well:** {round.tips.whatWentWell}</span>
                            </div>
                          )}
                          {round.tips.areasForImprovement && (
                            <div className="flex gap-2">
                              <span className="text-orange-600">⚡</span>
                              <span className="text-gray-700">**Improvement:** {round.tips.areasForImprovement}</span>
                            </div>
                          )}
                          {round.tips.adviceForCandidates && (
                            <div className="flex gap-2">
                              <span className="text-blue-600">💡</span>
                              <span className="text-gray-700">**Advice:** {round.tips.adviceForCandidates}</span>
                            </div>
                          )}
                          {round.tips.preparationResources && (
                            <div className="flex gap-2">
                              <span className="text-purple-600">📚</span>
                              <span className="text-gray-700">**Resources:** {round.tips.preparationResources}</span>
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

          {/* Interview Environment */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Interview Environment</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Mode:</span>
                <span className="ml-2 text-gray-600">{feedback.interviewEnvironment.interviewMode}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interviewer Behavior:</span>
                <span className="ml-2 text-gray-600">{feedback.interviewEnvironment.interviewerBehavior}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Stress Level:</span>
                <span className="ml-2 text-gray-600">{feedback.interviewEnvironment.stressLevel}/10</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Break Time:</span>
                <span className="ml-2 text-gray-600">{feedback.interviewEnvironment.breakTimeBetweenRounds}</span>
              </div>
              {feedback.interviewEnvironment.unexpectedSituations && (
                <div className="col-span-2">
                  <span className="font-medium text-gray-700">Unexpected:</span>
                  <span className="ml-2 text-gray-600">{feedback.interviewEnvironment.unexpectedSituations}</span>
                </div>
              )}
              {feedback.interviewEnvironment.joiningOfferProcess && (
                <div className="col-span-2">
                  <span className="font-medium text-gray-700">Offer Process:</span>
                  <span className="ml-2 text-gray-600">{feedback.interviewEnvironment.joiningOfferProcess}</span>
                </div>
              )}
            </div>
          </div>

          {/* Preparation Resources */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              Preparation Guide
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Resources Used:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {feedback.preparationResources.booksWebsites.map((resource, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full border border-green-300 text-gray-700">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div>
                  <span className="font-medium text-gray-700">Mock Interviews:</span>
                  <span className="ml-2 text-gray-600">{feedback.preparationResources.mockInterviewsTaken ? "Yes" : "No"}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Peer Study:</span>
                  <span className="ml-2 text-gray-600">{feedback.preparationResources.peerStudyGroup ? "Yes" : "No"}</span>
                </div>
              </div>
              {feedback.preparationResources.keyPreparationTips && (
                <div>
                  <span className="font-medium text-gray-700">Key Tips:</span>
                  <p className="mt-1 text-gray-600">{feedback.preparationResources.keyPreparationTips}</p>
                </div>
              )}
              {feedback.preparationResources.commonMistakesToAvoid && (
                <div>
                  <span className="font-medium text-gray-700">Mistakes to Avoid:</span>
                  <p className="mt-1 text-gray-600">{feedback.preparationResources.commonMistakesToAvoid}</p>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Experience */}
          {feedback.detailedExperienceText && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Detailed Experience</h3>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                {feedback.detailedExperienceText}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {feedback.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer - Engagement Stats */}
        <div className="border-t bg-gray-50 p-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span className="font-medium">{feedback.upvotes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <ThumbsDown className="w-5 h-5" />
                <span className="font-medium">{feedback.downvotes}</span>
              </button>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span className="font-medium">{feedback.viewCount}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">{feedback.comments.length}</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Posted by {feedback.isAnonymous ? "Anonymous" : feedback.userId}
            </div>
          </div>
        </div>

        {/* Comments Section */}
        {feedback.comments.length > 0 && (
          <div className="border-t p-6 bg-white">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-black">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              Comments ({feedback.comments.length})
            </h3>
            <div className="space-y-4">
              {feedback.comments.slice(0, showAllComments ? feedback.comments.length : 2).map((comment, index) => (
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
              {feedback.comments.length > 2 && (
                <button
                  onClick={() => setShowAllComments(!showAllComments)}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  {showAllComments ? "Show Less" : `Show ${feedback.comments.length - 2} More Comments`}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}